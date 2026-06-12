# CNV Exam Hub

A comprehensive web application and parser designed to convert raw CNV exam texts into a fully interactive, Moodle-like web experience.

## Live Demo
Access the live exam hub here: **[CNV Exam Hub Web App](https://ang3lo-azevedo.github.io/cnv-exam-hub/)**

## Repository Structure
- `pdfs/` - Raw exam PDFs.
- `extracted_text/` - Raw text extracted from the exams.
- `scripts/` - Python parsing tools used to extract and format questions.
- `web_app/` - The frontend application (HTML/CSS/JS) that dynamically renders the exams.

## How to Add a New Exam

1. **Extract the text:** Copy the raw text from an exam PDF into a `.txt` file inside `extracted_text/`.
2. **Run the parser:** Convert the text into a structured Javascript data file using the python script:
   ```bash
   python3 scripts/parse_to_js.py extracted_text/your-exam-text.txt web_app/data/your_exam.js
   ```
3. **Link it:** Open `web_app/index.html` and add a new clickable card pointing to your new exam:
   ```html
   <a href="exam.html?id=your_exam" class="exam-card">
       <div class="exam-info">
           <h2>Your Exam Title</h2>
           <p>Exam details...</p>
       </div>
       <div class="exam-arrow">&rarr;</div>
   </a>
   ```

## Features
- **Dynamic Exam Engine:** Renders multiple-choice, multiple-select, and interactive fill-in-the-blank questions.
- **Smart Distractors:** The parser automatically generates tricky distractors for fill-in-the-blank text dropdowns based on cloud computing terminology.
- **Grading & Evaluation:** Calculates your grade out of 20 marks natively in the browser, awarding partial marks for partially correct answers and penalizing incorrect ones.
- **GitHub Pages:** Fully integrated CI/CD to deploy the `web_app` directly to GitHub Pages automatically on push.
