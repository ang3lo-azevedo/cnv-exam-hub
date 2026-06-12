// engine.js expects window.examData and window.examConfig to be populated by the dynamically loaded exam data script.

let userAnswers = {}; 
let timerInterval;
let timeLeft = 0;
let isSubmitted = false;

document.addEventListener('DOMContentLoaded', () => {
    // Determine which exam to load from URL params
    const urlParams = new URLSearchParams(window.location.search);
    const examId = urlParams.get('id');

    if (!examId) {
        document.body.innerHTML = '<h2>Error: No exam ID specified. Go back to the <a href="index.html">Exam Hub</a>.</h2>';
        return;
    }

    // Dynamically load the exam data
    const script = document.createElement('script');
    script.src = `data/${examId}.js`;
    script.onload = () => {
        if (window.examData && window.examConfig) {
            document.getElementById('exam-title').textContent = window.examConfig.title;
            document.title = window.examConfig.title;
            timeLeft = window.examConfig.timeLimit * 60;
            initExam();
            startTimer();
        } else {
            document.body.innerHTML = '<h2>Error: Failed to parse exam data.</h2>';
        }
    };
    script.onerror = () => {
        document.body.innerHTML = `<h2>Error: Exam "${examId}" not found. Go back to the <a href="index.html">Exam Hub</a>.</h2>`;
    };
    document.body.appendChild(script);

    document.getElementById('submit-btn').addEventListener('click', submitExam);
    document.getElementById('close-modal-btn').addEventListener('click', () => {
        document.getElementById('evaluation-modal').classList.add('hidden');
    });
});

function initExam() {
    const questionsContainer = document.getElementById('questions-container');
    const navGrid = document.getElementById('nav-grid');
    
    questionsContainer.innerHTML = '';
    navGrid.innerHTML = '';

    const validQuestions = window.examData.filter(q => (q.options && q.options.length > 0) || (q.fill_in_blanks && q.fill_in_blanks.length > 0));
    const marksPerQ = (20 / validQuestions.length).toFixed(2);

    window.examData.forEach((q, index) => {
        if((!q.options || q.options.length === 0) && (!q.fill_in_blanks || q.fill_in_blanks.length === 0)) return;

        userAnswers[q.number] = q.fill_in_blanks && q.fill_in_blanks.length > 0 
            ? new Array(q.fill_in_blanks.length).fill('') 
            : [];

        // Nav Item
        const navBtn = document.createElement('a');
        navBtn.href = `#q-${q.number}`;
        navBtn.className = 'nav-item';
        navBtn.id = `nav-${q.number}`;
        navBtn.textContent = q.number;
        navGrid.appendChild(navBtn);

        // Question Card
        const card = document.createElement('div');
        card.className = 'question-card';
        card.id = `q-${q.number}`;

        if (q.fill_in_blanks && q.fill_in_blanks.length > 0) {
            let htmlText = q.text;
            let blankIndex = 0;
            
            // Create the options HTML from the correct answers + distractors (shuffled/sorted)
            let allOptions = [...new Set([...q.fill_in_blanks, ...(q.distractors || [])])].sort();
            let selectOptionsHtml = `<option value="">-- Select --</option>`;
            allOptions.forEach(opt => {
                selectOptionsHtml += `<option value="${opt.replace(/"/g, '&quot;')}">${opt}</option>`;
            });

            while(htmlText.includes('\\_\\_\\_\\_')) {
                let selectElement = `<select class="blank-input" onchange="handleBlankInput(${q.number}, ${blankIndex}, this.value)">${selectOptionsHtml}</select>`;
                htmlText = htmlText.replace('\\_\\_\\_\\_', selectElement);
                blankIndex++;
            }

            card.innerHTML = `
                <div class="question-header">
                    <div class="question-number">Question ${q.number} <span style="font-size: 0.9rem; color: var(--text-light); font-weight: normal; margin-left: 8px;">(${marksPerQ} marks)</span></div>
                    <div class="question-status">Fill in the blanks</div>
                </div>
                <div class="question-text" style="white-space: pre-wrap; line-height: 2;">${htmlText}</div>
                <div class="explanation-box" id="exp-${q.number}">
                    <strong>Correct Answer(s):</strong> ${q.fill_in_blanks.join(', ')}
                </div>
            `;
            questionsContainer.appendChild(card);
            return;
        }

        const isMulti = q.is_multi;
        const inputType = isMulti ? 'checkbox' : 'radio';

        let optionsHtml = q.options.map(opt => `
            <label class="option-row" id="row-${q.number}-${opt.id}">
                <input type="${inputType}" name="q-${q.number}" value="${opt.id}" onchange="handleSelection(${q.number}, '${opt.id}', ${isMulti})">
                <div class="option-label"><strong>${opt.id}.</strong> ${opt.text}</div>
            </label>
        `).join('');

        card.innerHTML = `
            <div class="question-header">
                <div class="question-number">Question ${q.number} <span style="font-size: 0.9rem; color: var(--text-light); font-weight: normal; margin-left: 8px;">(${marksPerQ} marks)</span></div>
                <div class="question-status">${isMulti ? 'Select one or more' : 'Select one'}</div>
            </div>
            <div class="question-text">${q.text}</div>
            <div class="options-container">
                ${optionsHtml}
            </div>
            <div class="explanation-box" id="exp-${q.number}">
                <strong>Correct Answer(s):</strong> ${q.explanation || q.correct_ids.join(', ')}
            </div>
        `;
        
        questionsContainer.appendChild(card);
    });
}

window.handleBlankInput = function(qNumber, index, value) {
    if (isSubmitted) return;
    userAnswers[qNumber][index] = value.trim();
    
    const navBtn = document.getElementById(`nav-${qNumber}`);
    const answeredCount = userAnswers[qNumber].filter(v => v !== '').length;
    if (answeredCount > 0) {
        navBtn.classList.add('answered');
    } else {
        navBtn.classList.remove('answered');
    }
};

window.handleSelection = function(qNumber, optId, isMulti) {
    if (isSubmitted) return;

    if (isMulti) {
        const idx = userAnswers[qNumber].indexOf(optId);
        if (idx > -1) {
            userAnswers[qNumber].splice(idx, 1);
        } else {
            userAnswers[qNumber].push(optId);
        }
    } else {
        userAnswers[qNumber] = [optId];
    }

    const card = document.getElementById(`q-${qNumber}`);
    const rows = card.querySelectorAll('.option-row');
    rows.forEach(r => r.classList.remove('selected'));
    
    userAnswers[qNumber].forEach(id => {
        document.getElementById(`row-${qNumber}-${id}`).classList.add('selected');
    });

    const navBtn = document.getElementById(`nav-${qNumber}`);
    if (userAnswers[qNumber].length > 0) {
        navBtn.classList.add('answered');
    } else {
        navBtn.classList.remove('answered');
    }
};

function startTimer() {
    const timerEl = document.getElementById('timer');
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            submitExam();
            return;
        }
        timeLeft--;
        const m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
        const s = (timeLeft % 60).toString().padStart(2, '0');
        timerEl.textContent = `${m}:${s}`;
    }, 1000);
}

function submitExam() {
    if (isSubmitted) return;
    if (!confirm("Are you sure you want to submit the exam?")) return;
    
    isSubmitted = true;
    clearInterval(timerInterval);
    document.getElementById('submit-btn').disabled = true;

    let totalMarks = 0;
    const questionsToGrade = window.examData.filter(q => (q.options && q.options.length > 0) || (q.fill_in_blanks && q.fill_in_blanks.length > 0));
    const maxMarks = 20;
    const weightPerQuestion = maxMarks / questionsToGrade.length;

    let correctCount = 0;
    let partialCount = 0;
    let incorrectCount = 0;

    questionsToGrade.forEach(q => {
        const uAns = userAnswers[q.number] || [];
        const cAns = q.correct_ids;
        let markForQ = 0;

        const navBtn = document.getElementById(`nav-${q.number}`);
        const card = document.getElementById(`q-${q.number}`);
        card.classList.add('reviewed');

        if (q.fill_in_blanks && q.fill_in_blanks.length > 0) {
            let correctBlanks = 0;
            const inputs = card.querySelectorAll('.blank-input');
            
            q.fill_in_blanks.forEach((correctText, idx) => {
                const inputEl = inputs[idx];
                if (inputEl) inputEl.disabled = true;
                
                if (uAns[idx] && uAns[idx].toLowerCase() === correctText.toLowerCase()) {
                    correctBlanks++;
                    if (inputEl) {
                        inputEl.classList.add('correct-input');
                        inputEl.style.borderColor = 'var(--success)';
                        inputEl.style.backgroundColor = '#ECFDF5';
                    }
                } else {
                    if (inputEl) {
                        inputEl.classList.add('incorrect-input');
                        inputEl.style.borderColor = 'var(--danger)';
                        inputEl.style.backgroundColor = '#FEF2F2';
                    }
                }
            });
            
            if (correctBlanks === q.fill_in_blanks.length) {
                markForQ = weightPerQuestion;
                navBtn.classList.add('correct');
                correctCount++;
            } else if (correctBlanks > 0) {
                markForQ = (correctBlanks / q.fill_in_blanks.length) * weightPerQuestion;
                navBtn.classList.add('partial');
                partialCount++;
            } else {
                navBtn.classList.add('incorrect');
                incorrectCount++;
            }
        } else {
            q.options.forEach(opt => {
            const row = document.getElementById(`row-${q.number}-${opt.id}`);
            row.querySelector('input').disabled = true; 
            
            if (cAns.includes(opt.id)) {
                row.classList.add('correct-ans');
            }
            if (uAns.includes(opt.id) && !cAns.includes(opt.id)) {
                row.classList.add('incorrect-ans');
            }
        });

        if (q.is_multi) {
            if (uAns.length === 0 || uAns.length === q.options.length) {
                navBtn.classList.add('incorrect');
                incorrectCount++;
            } else {
                let correctSelected = uAns.filter(id => cAns.includes(id)).length;
                let wrongSelected = uAns.filter(id => !cAns.includes(id)).length;
                
                let scoreRatio = (correctSelected / cAns.length) - (wrongSelected / (q.options.length - cAns.length));
                scoreRatio = Math.max(0, Math.min(1, scoreRatio)); 
                
                markForQ = scoreRatio * weightPerQuestion;

                if (scoreRatio === 1) {
                    navBtn.classList.add('correct');
                    correctCount++;
                } else if (scoreRatio > 0) {
                    navBtn.classList.add('partial');
                    partialCount++;
                } else {
                    navBtn.classList.add('incorrect');
                    incorrectCount++;
                }
            }
        } else {
            if (uAns.length === 0) {
                navBtn.classList.add('incorrect');
                incorrectCount++;
            } else if (uAns[0] === cAns[0]) {
                markForQ = weightPerQuestion;
                navBtn.classList.add('correct');
                correctCount++;
            } else {
                const penaltyRatio = 1 / (q.options.length - 1);
                markForQ = - (penaltyRatio * weightPerQuestion);
                navBtn.classList.add('incorrect');
                incorrectCount++;
            }
        }
        }
        
        totalMarks += markForQ;
    });

    totalMarks = Math.max(0, Math.min(maxMarks, totalMarks));

    document.getElementById('final-score').textContent = totalMarks.toFixed(2);
    document.getElementById('score-details').innerHTML = `
        <strong>${correctCount}</strong> Fully Correct <br>
        <strong>${partialCount}</strong> Partially Correct <br>
        <strong>${incorrectCount}</strong> Incorrect/Blank
    `;

    document.getElementById('evaluation-modal').classList.remove('hidden');
}
