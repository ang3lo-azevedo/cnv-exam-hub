// engine.js expects window.examData and window.examConfig to be populated by the dynamically loaded exam data script.

let userAnswers = {};
let flaggedQuestions = {};
let timerInterval;
let timeLeft = 0;
let isSubmitted = false;
let isSelfGradingPhase = false;
let partialObjectiveMarks = 0;
let currentQuestionIndex = 0;

function showQuestion(index) {
    const totalQuestions = window.examData.length;
    if (index < 0 || index >= totalQuestions) return;

    document.querySelectorAll('.que').forEach(q => q.style.display = 'none');

    const q = window.examData[index];
    const card = document.getElementById(`q-${q.number}`);
    if (card) card.style.display = 'flex';

    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.style.borderWidth = '2px';
        btn.style.fontWeight = 'normal';
    });
    const activeNav = document.getElementById(`nav-${q.number}`);
    if (activeNav) {
        activeNav.style.borderWidth = '3px';
        activeNav.style.fontWeight = 'bold';
    }

    currentQuestionIndex = index;

    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    if (prevBtn) prevBtn.style.visibility = index === 0 ? 'hidden' : 'visible';
    if (nextBtn) nextBtn.style.visibility = index === totalQuestions - 1 ? 'hidden' : 'visible';

    window.scrollTo(0, 0);
}

function prevQuestion() { showQuestion(currentQuestionIndex - 1); }
function nextQuestion() { showQuestion(currentQuestionIndex + 1); }

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

    const retakeBtn = document.getElementById('retake-btn');
    if (retakeBtn) {
        retakeBtn.addEventListener('click', () => {
            if (confirm("Are you sure you want to completely erase your progress and retake the exam?")) {
                localStorage.removeItem(`exam_${examId}_answers`);
                localStorage.removeItem(`exam_${examId}_completed`);
                localStorage.removeItem(`exam_${examId}_score`);
                localStorage.removeItem(`exam_${examId}_timeLeft`);
                window.location.reload();
            }
        });
    }
});

function initExam() {
    const questionsContainer = document.getElementById('questions-container');
    const navGrid = document.getElementById('nav-grid');

    questionsContainer.innerHTML = '';
    navGrid.innerHTML = '';

    const validQuestions = window.examData.filter(q => q.is_open_text || (q.options && q.options.length > 0) || (q.fill_in_blanks && q.fill_in_blanks.length > 0));
    const marksPerQ = (20 / validQuestions.length).toFixed(2);

    window.examData.forEach((q, idx) => {
        if (!q.is_open_text && (!q.options || q.options.length === 0) && (!q.fill_in_blanks || q.fill_in_blanks.length === 0)) return;

        if (q.fill_in_blanks && q.fill_in_blanks.length > 0) {
            userAnswers[q.number] = new Array(q.fill_in_blanks.length).fill('');
        } else if (q.is_open_text) {
            userAnswers[q.number] = '';
        } else {
            userAnswers[q.number] = [];
        }

        // Nav Item
        const navBtn = document.createElement('a');
        navBtn.href = '#';
        navBtn.onclick = (e) => { e.preventDefault(); showQuestion(idx); };
        navBtn.className = 'nav-item';
        navBtn.id = `nav-${q.number}`;
        navBtn.textContent = q.number;
        navGrid.appendChild(navBtn);

        // Moodle Question layout
        const card = document.createElement('div');
        card.className = 'que';
        card.id = `q-${q.number}`;

        let statusText = isSubmitted ? 'Reviewed' : 'Not yet answered';
        const qMarks = q.marks !== undefined ? q.marks : (q.is_open_text ? 0 : 1.0);
        const marksText = q.marks_text || (q.is_open_text ? 'Not graded' : `Marked out of ${qMarks.toFixed(2)}`);
        const versionHtml = q.version ? `<div class="version-badge-container"><span class="version-badge">${q.version} (latest)</span></div>` : '';

        let contentHtml = '';
        let formattedText = q.text.replace(/<strong>\((.*?)\)<\/strong>/g, '<strong><em>($1)</em></strong>');

        if (q.is_open_text) {
            if (q.number === 1) {
                contentHtml = `
                    <div class="formulation">${formattedText}</div>
                    <div class="answer">
                        <textarea class="open-text-area-q1" id="text-${q.number}" oninput="handleOpenText(${q.number}, this.value)"></textarea>
                    </div>
                `;
            } else {
                contentHtml = `
                    <div class="formulation">${formattedText}</div>
                    <div class="answer">
                        <textarea class="open-text-area" id="text-${q.number}" placeholder="Enter your answer here..." oninput="handleOpenText(${q.number}, this.value)"></textarea>
                    </div>
                    <div class="self-grade-panel" id="self-grade-${q.number}" style="display:none;">
                        <h4>Solution Sketch</h4>
                        <div class="solution-sketch">${q.solution_sketch}</div>
                        <label><strong>Grade yourself out of ${qMarks}:</strong></label>
                        <input type="number" class="grade-input" id="grade-${q.number}" min="0" max="${qMarks}" step="0.01" value="0">
                    </div>
                `;
            }
        } else if (q.fill_in_blanks && q.fill_in_blanks.length > 0) {
            let htmlText = formattedText;
            let blankIndex = 0;
            let allOptions = [...new Set([...q.fill_in_blanks, ...(q.distractors || [])])].sort();
            let selectOptionsHtml = `<option value="">-- Select --</option>`;
            allOptions.forEach(o => {
                selectOptionsHtml += `<option value="${o}">${o}</option>`;
            });

            htmlText = htmlText.replace(/\[\.\.\.\]|\[dropdown\]/g, match => {
                const s = `<select class="blank-input" name="q-${q.number}-${blankIndex}" onchange="handleBlankInput(${q.number}, ${blankIndex}, this.value)">${selectOptionsHtml}</select>`;
                blankIndex++;
                return s;
            });

            contentHtml = `
                <div class="formulation">${htmlText}</div>

            `;
        } else {
            const isMulti = q.is_multi;
            const inputType = isMulti ? 'checkbox' : 'radio';
            const selectPrompt = isMulti ? 'Select one or more:' : 'Select one:';

            contentHtml = `
                <div class="formulation">${formattedText}</div>
                <div class="select-prompt">${selectPrompt}</div>
                <div class="answer">
                    ${q.options.map(opt => `
                        <label class="option-row" id="row-${q.number}-${opt.id}">
                            <input type="${inputType}" name="q-${q.number}" value="${opt.id}" onchange="handleSelection(${q.number}, '${opt.id}', ${isMulti})">
                            <div class="option-label"><strong>${opt.id}.</strong> ${opt.text}</div>
                        </label>
                    `).join('')}
                </div>
            `;
        }

        card.innerHTML = `
            <div class="info">
                <h3 class="question-number">Question <strong>${q.number}</strong></h3>
                <div id="state-${q.number}" class="state">${statusText}</div>
                <div class="grade">${marksText}</div>
                ${versionHtml}
                <div class="flag" id="flag-${q.number}" onclick="toggleFlag(${q.number})">
                    <span id="flag-icon-${q.number}" style="color:var(--moodle-blue)">&#9873;</span>
                    <span id="flag-text-${q.number}">Flag question</span>
                </div>
            </div>
            <div class="content-wrapper" style="flex: 1; display: flex; flex-direction: column; gap: 15px;">
                <div class="content">
                    ${contentHtml}
                </div>
                <div id="exp-${q.number}" class="explanation-box" style="display:none; padding: 15px; border-radius: 4px; font-size: 0.95rem;"></div>
            </div>
        `;
        questionsContainer.appendChild(card);
    });

    restoreState();
    showQuestion(0);
}

function saveState() {
    const urlParams = new URLSearchParams(window.location.search);
    const examId = urlParams.get('id');
    localStorage.setItem(`exam_${examId}_answers`, JSON.stringify(userAnswers));
    localStorage.setItem(`exam_${examId}_flags`, JSON.stringify(flaggedQuestions));
}

function restoreState() {
    const urlParams = new URLSearchParams(window.location.search);
    const examId = urlParams.get('id');
    const savedAns = localStorage.getItem(`exam_${examId}_answers`);
    if (savedAns) {
        try {
            const parsed = JSON.parse(savedAns);
            for (let qNum in parsed) {
                userAnswers[qNum] = parsed[qNum];
            }
        } catch (e) { }
    }

    const savedFlags = localStorage.getItem(`exam_${examId}_flags`);
    if (savedFlags) {
        try {
            flaggedQuestions = JSON.parse(savedFlags);
        } catch (e) { }
    }

    window.examData.forEach(q => {
        if (!userAnswers[q.number]) return;
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

        updateFlagUI(q.number);
    });

    const isCompleted = localStorage.getItem(`exam_${examId}_completed`) === 'true';
    const isFinalized = localStorage.getItem(`exam_${examId}_finalized`) === 'true';
    if (isCompleted) {
        submitExam(true);
        if (isFinalized) {
            const savedGradesStr = localStorage.getItem(`exam_${examId}_openGrades`);
            if (savedGradesStr) {
                try {
                    const savedGrades = JSON.parse(savedGradesStr);
                    window.examData.forEach(q => {
                        if (q.is_open_text && q.number !== 1 && savedGrades[q.number] !== undefined) {
                            const gradeInput = document.getElementById(`grade-${q.number}`);
                            if (gradeInput) {
                                gradeInput.value = savedGrades[q.number];
                                gradeInput.disabled = true;
                            }
                            const nb = document.getElementById(`nav-${q.number}`);
                            if (nb) nb.classList.add('correct');
                        }
                    });
                } catch(e) {}
            }
            const submitBtn = document.getElementById('submit-btn');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = "Submitted";
            }
            const finalScore = parseFloat(localStorage.getItem(`exam_${examId}_score`) || '0');
            showFinalModal(finalScore);
        }
    }
}

window.toggleFlag = function (qNumber) {
    if (isSubmitted && !isSelfGradingPhase) return;
    flaggedQuestions[qNumber] = !flaggedQuestions[qNumber];
    saveState();
    updateFlagUI(qNumber);
};

function updateFlagUI(qNumber) {
    const isFlagged = flaggedQuestions[qNumber];
    const icon = document.getElementById(`flag-icon-${qNumber}`);
    const text = document.getElementById(`flag-text-${qNumber}`);
    const navBtn = document.getElementById(`nav-${qNumber}`);

    if (!icon || !text || !navBtn) return;

    if (isFlagged) {
        icon.style.color = 'var(--danger)';
        text.textContent = 'Remove flag';
        navBtn.classList.add('flagged');
    } else {
        icon.style.color = 'var(--moodle-blue)';
        text.textContent = 'Flag question';
        navBtn.classList.remove('flagged');
    }
}

window.handleOpenText = function (qNumber, value) {
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

window.handleBlankInput = function (qNumber, index, value) {
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

window.handleSelection = function (qNumber, optId, isMulti) {
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
    const urlParams = new URLSearchParams(window.location.search);
    const examId = urlParams.get('id');
    const savedTime = localStorage.getItem(`exam_${examId}_timeLeft`);
    if (savedTime !== null) {
        timeLeft = parseInt(savedTime, 10);
    }

    const timerEl = document.getElementById('timer');
    if (!timerEl) return;

    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            submitExam(true);
            return;
        }
        timeLeft--;
        localStorage.setItem(`exam_${examId}_timeLeft`, timeLeft);

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
    let hasOpenText = false;

    window.examData.forEach(q => {
        const uAns = userAnswers[q.number];
        const card = document.getElementById(`q-${q.number}`);
        const navBtn = document.getElementById(`nav-${q.number}`);
        const expBox = document.getElementById(`exp-${q.number}`);

        if (q.is_open_text) {
            document.getElementById(`text-${q.number}`).disabled = true;
            if (q.number !== 1) {
                hasOpenText = true;
                document.getElementById(`self-grade-${q.number}`).style.display = 'block';
                navBtn.classList.add('partial');
            } else {
                navBtn.classList.add('correct');
            }
        } else if (q.fill_in_blanks && q.fill_in_blanks.length > 0) {
            card.classList.add('reviewed');
            let correctBlanks = 0;
            const inputs = card.querySelectorAll('.blank-input');
            const qMarks = q.marks !== undefined ? q.marks : 1.0;

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

            let markForQ = (correctBlanks / q.fill_in_blanks.length) * qMarks;
            totalMarks += markForQ;
            if (correctBlanks === q.fill_in_blanks.length) navBtn.classList.add('correct');
            else if (correctBlanks > 0) navBtn.classList.add('partial');
            else navBtn.classList.add('incorrect');
        } else {
            card.classList.add('reviewed');
            const isMulti = q.is_multi;
            q.options.forEach(opt => {
                const row = document.getElementById(`row-${q.number}-${opt.id}`);
                row.querySelector('input').disabled = true;
                if (q.correct_ids.includes(opt.id)) row.classList.add('correct-ans');
                if (uAns.includes(opt.id) && !q.correct_ids.includes(opt.id)) row.classList.add('incorrect-ans');
            });

            let score = 0;
            let maxPoints = q.marks !== undefined ? q.marks : 1.0;
            let correctCount = 0;
            let hasIncorrect = false;

            if (isMulti) {
                uAns.forEach(ansId => {
                    if (q.correct_ids.includes(ansId)) {
                        score += (1.0 / q.correct_ids.length) * maxPoints;
                        correctCount++;
                    } else {
                        hasIncorrect = true;
                        score -= (1.0 / q.correct_ids.length) * maxPoints;
                    }
                });
            } else {
                if (q.correct_ids.includes(uAns[0])) {
                    score += maxPoints;
                    correctCount = 1;
                } else if (uAns.length > 0 && uAns[0] !== '') {
                    hasIncorrect = true;
                    if (q.options.length > 1) {
                        score -= (1.0 / (q.options.length - 1)) * maxPoints;
                    }
                }
            }
            score = Math.max(0, score);
            totalMarks += score;
            if (correctCount === q.correct_ids.length && !hasIncorrect) navBtn.classList.add('correct');
            else if (score > 0) navBtn.classList.add('partial');
            else navBtn.classList.add('incorrect');
        }

        if (expBox && q.number !== 1 && !q.is_open_text) {
            expBox.style.display = 'block';
            let isCorrect = navBtn.classList.contains('correct');
            let isPartial = navBtn.classList.contains('partial');
            
            expBox.style.backgroundColor = isCorrect ? '#dff0d8' : (isPartial ? '#fcf8e3' : '#fcefdc');
            expBox.style.color = isCorrect ? '#3c763d' : '#8a6d3b';
            
            let statusPhrase = isCorrect ? 'Your answer is correct.' : (isPartial ? 'Your answer is partially correct.' : 'Your answer is incorrect.');
            
            let correctText = '';
            if (q.is_open_text) {
                correctText = `The correct answer is: ${q.solution_sketch || ''}`;
            } else if (q.fill_in_blanks && q.fill_in_blanks.length > 0) {
                correctText = `The correct answers are: ${q.fill_in_blanks.join(', ')}`;
            } else {
                let actualTexts = q.correct_ids.map(id => {
                    let opt = q.options.find(o => o.id === id);
                    return opt ? opt.text.replace(/<[^>]*>?/gm, '') : id;
                });
                let prefix = actualTexts.length > 1 ? 'The correct answers are:' : 'The correct answer is:';
                correctText = `${prefix} ${actualTexts.join(', ')}`;
            }

            expBox.innerHTML = `
                ${statusPhrase}<br><br>
                ${correctText}
                ${q.note ? `<br><br><strong>Note:</strong> ${q.note}` : ''}
            `;
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

    let openTextGrades = {};

    validQuestions.forEach(q => {
        if (q.is_open_text && q.number !== 1) {
            const gradeInput = document.getElementById(`grade-${q.number}`);
            const grade = parseFloat(gradeInput.value) || 0;
            openTextGrades[q.number] = grade;
            totalMarks += grade;
            gradeInput.disabled = true;
            document.getElementById(`nav-${q.number}`).classList.add('correct'); // mark as finalized
        }
    });

    const urlParams = new URLSearchParams(window.location.search);
    const examId = urlParams.get('id');
    localStorage.setItem(`exam_${examId}_openGrades`, JSON.stringify(openTextGrades));
    localStorage.setItem(`exam_${examId}_finalized`, 'true');

    const submitBtn = document.getElementById('submit-btn');
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Submitted";
    }
    showFinalModal(totalMarks);
}

function showFinalModal(totalMarks) {
    const urlParams = new URLSearchParams(window.location.search);
    const examId = urlParams.get('id');
    localStorage.setItem(`exam_${examId}_completed`, 'true');
    localStorage.setItem(`exam_${examId}_score`, totalMarks.toFixed(2));

    const maxMarks = 20;
    totalMarks = Math.max(0, Math.min(maxMarks, totalMarks));
    let maxPossibleMarks = 0;
    window.examData.forEach(q => {
        maxPossibleMarks += q.marks !== undefined ? q.marks : (q.is_open_text ? 0 : 1.0);
    });

    // Scale to 20
    let finalScore = maxPossibleMarks > 0 ? (totalMarks / maxPossibleMarks) * 20 : 0;
    document.getElementById('final-score').textContent = finalScore.toFixed(2);
    document.getElementById('score-details').innerHTML = `Final evaluation recorded.`;
    document.getElementById('evaluation-modal').classList.remove('hidden');
}
