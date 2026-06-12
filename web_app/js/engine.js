// engine.js expects window.examData and window.examConfig to be populated by the dynamically loaded exam data script.

let userAnswers = {}; 
let timerInterval;
let timeLeft = 0;
let isSubmitted = false;
let isSelfGradingPhase = false;
let partialObjectiveMarks = 0;

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const examId = urlParams.get('id');

    if (!examId) {
        document.body.innerHTML = '<h2>Error: No exam ID specified. Go back to the <a href="index.html">Exam Hub</a>.</h2>';
        return;
    }

    const script = document.createElement('script');
    script.src = `data/${examId}.js`;
    script.onload = () => {
        if (window.examData && window.examConfig) {
            document.getElementById('exam-title').textContent = window.examConfig.title;
            const breadcrumb = document.getElementById('breadcrumb-title');
            if (breadcrumb) breadcrumb.textContent = window.examConfig.title;
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

    const validQuestions = window.examData.filter(q => q.is_open_text || (q.options && q.options.length > 0) || (q.fill_in_blanks && q.fill_in_blanks.length > 0));
    const marksPerQ = (20 / validQuestions.length).toFixed(2);

    window.examData.forEach((q) => {
        if(!q.is_open_text && (!q.options || q.options.length === 0) && (!q.fill_in_blanks || q.fill_in_blanks.length === 0)) return;

        if (q.fill_in_blanks && q.fill_in_blanks.length > 0) {
            userAnswers[q.number] = new Array(q.fill_in_blanks.length).fill('');
        } else if (q.is_open_text) {
            userAnswers[q.number] = '';
        } else {
            userAnswers[q.number] = [];
        }

        // Nav Item
        const navBtn = document.createElement('a');
        navBtn.href = `#q-${q.number}`;
        navBtn.className = 'nav-item';
        navBtn.id = `nav-${q.number}`;
        navBtn.textContent = q.number;
        navGrid.appendChild(navBtn);

        // Moodle Question layout
        const card = document.createElement('div');
        card.className = 'que';
        card.id = `q-${q.number}`;
        
        let contentHtml = '';
        let statusText = 'Not yet answered';

        if (q.is_open_text) {
            contentHtml = `
                <div class="formulation">${q.text}</div>
                <div class="answer">
                    <textarea class="open-text-area" id="text-${q.number}" placeholder="Enter your answer here..." oninput="handleOpenText(${q.number}, this.value)"></textarea>
                </div>
                <div class="self-grade-panel" id="self-grade-${q.number}" style="display:none;">
                    <h4>Solution Sketch</h4>
                    <div class="solution-sketch">${q.solution_sketch}</div>
                    <label><strong>Grade yourself out of ${marksPerQ}:</strong></label>
                    <input type="number" class="grade-input" id="grade-${q.number}" min="0" max="${marksPerQ}" step="0.01" value="0">
                </div>
            `;
            statusText = 'Open text';
        } else if (q.fill_in_blanks && q.fill_in_blanks.length > 0) {
            let htmlText = q.text;
            let blankIndex = 0;
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

            contentHtml = `
                <div class="formulation">${htmlText}</div>
                <div class="explanation-box" id="exp-${q.number}">
                    <strong>Correct Answer(s):</strong> ${q.fill_in_blanks.join(', ')}
                </div>
            `;
            statusText = 'Fill in the blanks';
        } else {
            const isMulti = q.is_multi;
            const inputType = isMulti ? 'checkbox' : 'radio';
            let optionsHtml = q.options.map(opt => `
                <label class="option-row" id="row-${q.number}-${opt.id}">
                    <input type="${inputType}" name="q-${q.number}" value="${opt.id}" onchange="handleSelection(${q.number}, '${opt.id}', ${isMulti})">
                    <div class="option-label"><strong>${opt.id}.</strong> ${opt.text}</div>
                </label>
            `).join('');

            contentHtml = `
                <div class="formulation">${q.text}</div>
                <div class="answer">
                    ${optionsHtml}
                </div>
                <div class="explanation-box" id="exp-${q.number}">
                    <strong>Correct Answer(s):</strong> ${q.explanation || q.correct_ids.join(', ')}
                </div>
            `;
            statusText = isMulti ? 'Select one or more' : 'Select one';
        }

        card.innerHTML = `
            <div class="info">
                <div class="question-number">Question <strong>${q.number}</strong></div>
                <div class="state" id="state-${q.number}">${statusText}</div>
                <div class="grade">Marked out of ${marksPerQ}</div>
                <div class="flag">&#9873; Flag question</div>
            </div>
            <div class="content">
                ${contentHtml}
            </div>
        `;
        questionsContainer.appendChild(card);
    });

    restoreState();
}

function saveState() {
    const urlParams = new URLSearchParams(window.location.search);
    const examId = urlParams.get('id');
    localStorage.setItem(`exam_${examId}_answers`, JSON.stringify(userAnswers));
}

function restoreState() {
    const urlParams = new URLSearchParams(window.location.search);
    const examId = urlParams.get('id');
    const saved = localStorage.getItem(`exam_${examId}_answers`);
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            for (let qNum in parsed) {
                userAnswers[qNum] = parsed[qNum];
            }
        } catch(e){}
    }

    window.examData.forEach(q => {
        if(!userAnswers[q.number]) return;
        const uAns = userAnswers[q.number];
        const navBtn = document.getElementById(`nav-${q.number}`);
        let hasAnswer = false;

        if (q.is_open_text) {
            const ta = document.getElementById(`text-${q.number}`);
            if (ta) ta.value = uAns;
            if (uAns && uAns.length > 0) hasAnswer = true;
        } else if (q.fill_in_blanks && q.fill_in_blanks.length > 0) {
            const card = document.getElementById(`q-${q.number}`);
            const selects = card.querySelectorAll('.blank-input');
            uAns.forEach((val, idx) => {
                if (selects[idx]) selects[idx].value = val;
                if (val !== '') hasAnswer = true;
            });
        } else {
            uAns.forEach(optId => {
                const row = document.getElementById(`row-${q.number}-${optId}`);
                if (row) {
                    row.classList.add('selected');
                    const input = row.querySelector('input');
                    if (input) input.checked = true;
                }
            });
            if (uAns.length > 0) hasAnswer = true;
        }

        if (hasAnswer && navBtn) navBtn.classList.add('answered');
    });

    const isCompleted = localStorage.getItem(`exam_${examId}_completed`) === 'true';
    if (isCompleted) {
        submitExam(true);
    }
}

window.handleOpenText = function(qNumber, value) {
    if (isSubmitted) return;
    userAnswers[qNumber] = value.trim();
    const navBtn = document.getElementById(`nav-${qNumber}`);
    if (userAnswers[qNumber].length > 0) {
        navBtn.classList.add('answered');
    } else {
        navBtn.classList.remove('answered');
    }
    saveState();
};

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
    saveState();
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
    saveState();
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

function submitExam(isAutoRestore = false) {
    if (isSelfGradingPhase) {
        finalizeExam();
        return;
    }
    
    if (isSubmitted) return;
    if (!isAutoRestore && !confirm("Are you sure you want to submit the exam?")) return;
    
    isSubmitted = true;
    clearInterval(timerInterval);
    document.getElementById('submit-btn').disabled = true;

    let totalMarks = 0;
    const validQuestions = window.examData.filter(q => q.is_open_text || (q.options && q.options.length > 0) || (q.fill_in_blanks && q.fill_in_blanks.length > 0));
    const marksPerQ = 20 / validQuestions.length;

    let correctCount = 0;
    let partialCount = 0;
    let incorrectCount = 0;
    let hasOpenText = false;

    validQuestions.forEach(q => {
        const uAns = userAnswers[q.number];
        const card = document.getElementById(`q-${q.number}`);
        const navBtn = document.getElementById(`nav-${q.number}`);

        if (q.is_open_text) {
            hasOpenText = true;
            document.getElementById(`text-${q.number}`).disabled = true;
            document.getElementById(`self-grade-${q.number}`).style.display = 'block';
            navBtn.classList.add('partial'); // Needs review
        } else if (q.fill_in_blanks && q.fill_in_blanks.length > 0) {
            card.classList.add('reviewed');
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
            
            let markForQ = 0;
            if (correctBlanks === q.fill_in_blanks.length) {
                markForQ = marksPerQ;
                navBtn.classList.add('correct');
                correctCount++;
            } else if (correctBlanks > 0) {
                markForQ = (correctBlanks / q.fill_in_blanks.length) * marksPerQ;
                navBtn.classList.add('partial');
                partialCount++;
            } else {
                navBtn.classList.add('incorrect');
                incorrectCount++;
            }
            totalMarks += markForQ;
        } else {
            card.classList.add('reviewed');
            const cAns = q.correct_ids;
            let markForQ = 0;
            
            q.options.forEach(opt => {
                const row = document.getElementById(`row-${q.number}-${opt.id}`);
                row.querySelector('input').disabled = true; 
                if (cAns.includes(opt.id)) row.classList.add('correct-ans');
                if (uAns.includes(opt.id) && !cAns.includes(opt.id)) row.classList.add('incorrect-ans');
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
                    markForQ = scoreRatio * marksPerQ;
                    if (scoreRatio === 1) { navBtn.classList.add('correct'); correctCount++; }
                    else if (scoreRatio > 0) { navBtn.classList.add('partial'); partialCount++; }
                    else { navBtn.classList.add('incorrect'); incorrectCount++; }
                }
            } else {
                if (uAns.length === 0) {
                    navBtn.classList.add('incorrect');
                    incorrectCount++;
                } else if (uAns[0] === cAns[0]) {
                    markForQ = marksPerQ;
                    navBtn.classList.add('correct');
                    correctCount++;
                } else {
                    const penaltyRatio = 1 / (q.options.length - 1);
                    markForQ = - (penaltyRatio * marksPerQ);
                    navBtn.classList.add('incorrect');
                    incorrectCount++;
                }
            }
            totalMarks += markForQ;
        }
    });

    partialObjectiveMarks = totalMarks;

    if (hasOpenText) {
        isSelfGradingPhase = true;
        const btn = document.getElementById('submit-btn');
        btn.textContent = "Finalize Grades";
        btn.disabled = false;
        if (!isAutoRestore) alert("Objective questions graded. Please review the solution sketches for the open text questions, grade yourself, and click 'Finalize Grades'.");
    } else {
        showFinalModal(totalMarks);
    }
}

function finalizeExam() {
    if (!confirm("Are you ready to finalize your grades?")) return;
    
    let totalMarks = partialObjectiveMarks;
    const validQuestions = window.examData.filter(q => q.is_open_text || (q.options && q.options.length > 0) || (q.fill_in_blanks && q.fill_in_blanks.length > 0));
    
    validQuestions.forEach(q => {
        if (q.is_open_text) {
            const gradeInput = document.getElementById(`grade-${q.number}`);
            const grade = parseFloat(gradeInput.value) || 0;
            totalMarks += grade;
            gradeInput.disabled = true;
            document.getElementById(`nav-${q.number}`).classList.add('correct'); // mark as finalized
        }
    });
    
    document.getElementById('submit-btn').disabled = true;
    showFinalModal(totalMarks);
}

function showFinalModal(totalMarks) {
    const urlParams = new URLSearchParams(window.location.search);
    const examId = urlParams.get('id');
    localStorage.setItem(`exam_${examId}_completed`, 'true');
    localStorage.setItem(`exam_${examId}_score`, totalMarks.toFixed(2));

    const maxMarks = 20;
    totalMarks = Math.max(0, Math.min(maxMarks, totalMarks));
    document.getElementById('final-score').textContent = totalMarks.toFixed(2);
    document.getElementById('score-details').innerHTML = `Final evaluation recorded.`;
    document.getElementById('evaluation-modal').classList.remove('hidden');
}
