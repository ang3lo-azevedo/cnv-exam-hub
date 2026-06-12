import re

with open("web_app/js/engine.js", "r") as f:
    engine = f.read()

# 1. Update formattedText in renderExam
old_formatted = "let formattedText = q.text.replace(/<strong>\\(\\(.*?\\)\\)<\\/strong>/g, '<strong><em>($1)</em></strong>');"

new_formatted = """let formattedText = q.text.replace(/<strong>\\((.*?)\\)<\\/strong>/g, '<strong><em>($1)</em></strong>');
        if (q.number === 1) {
            const linesToUnderline = [
                "Please fill in your identification in the draft sheet you were provided. Return it at the end of the exam after completely closing your submission.",
                "In the draft sheet and in this question you must insert your exam code given to you by the person watching the exam. You exam is not valid without the exam code.",
                "The exam is without consultation (no other windows or apps beside the one where the exam is being done). Otherwise, exam is annulled.",
                "The exam has a time limit of 80 minutes. You can only leave after submitting your exam and only after 45 minutes. We take the best grade of the two exams.",
                "There will be no further information about the exam questions (*dúvidas acerca do enunciado*) provided during the exam, besides the question text itself.",
                "Answer the questions given the context in the question."
            ];
            linesToUnderline.forEach(line => {
                formattedText = formattedText.replace(line, `<u>${line}</u>`);
            });
            formattedText = formattedText.replace(
                "Only if strictly needed, you can also insert here any other notes regarding the answering of some question(s) in the exam clearly identifying them in your comments",
                "<em>Only if strictly needed, you can also insert here any other notes regarding the answering of some question(s) in the exam clearly identifying them in your comments</em>"
            );
        }"""

engine = engine.replace(old_formatted, new_formatted)

# 2. Update contentHtml for q.is_open_text
old_open_text = """        if (q.is_open_text) {
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
            `;"""

new_open_text = """        if (q.is_open_text) {
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
            }"""

engine = engine.replace(old_open_text, new_open_text)

# 3. Update submitExam
old_submit = """        if (q.is_open_text) {
            hasOpenText = true;
            document.getElementById(`text-${q.number}`).disabled = true;
            document.getElementById(`self-grade-${q.number}`).style.display = 'block';
            navBtn.classList.add('partial');"""

new_submit = """        if (q.is_open_text) {
            document.getElementById(`text-${q.number}`).disabled = true;
            if (q.number !== 1) {
                hasOpenText = true;
                document.getElementById(`self-grade-${q.number}`).style.display = 'block';
                navBtn.classList.add('partial');
            } else {
                navBtn.classList.add('correct');
            }"""

engine = engine.replace(old_submit, new_submit)

# 4. Update finalizeExam
old_finalize = """        if (q.is_open_text) {
            const gradeInput = document.getElementById(`grade-${q.number}`);"""

new_finalize = """        if (q.is_open_text && q.number !== 1) {
            const gradeInput = document.getElementById(`grade-${q.number}`);"""

engine = engine.replace(old_finalize, new_finalize)

with open("web_app/js/engine.js", "w") as f:
    f.write(engine)

# Update style.css
with open("web_app/css/style.css", "r") as f:
    css = f.read()

new_css = """.open-text-area-q1 {
    width: 100%;
    height: 250px;
    background-color: #ffffff;
    border: none;
    font-family: inherit;
    font-size: 1rem;
    resize: vertical;
}

.open-text-area {"""

css = css.replace(".open-text-area {", new_css)

with open("web_app/css/style.css", "w") as f:
    f.write(css)

print("Patch applied successfully.")
