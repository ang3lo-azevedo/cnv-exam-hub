import re

with open("web_app/js/engine.js", "r") as f:
    engine = f.read()

# Fix total grading display
old_grading = """    document.getElementById('final-score').textContent = totalMarks.toFixed(2);"""

new_grading = """    let maxPossibleMarks = 0;
    window.examData.forEach(q => {
        maxPossibleMarks += q.marks !== undefined ? q.marks : (q.is_open_text ? 0 : 1.0);
    });
    
    // Scale to 20
    let finalScore = maxPossibleMarks > 0 ? (totalMarks / maxPossibleMarks) * 20 : 0;
    document.getElementById('final-score').textContent = finalScore.toFixed(2);"""

if old_grading in engine:
    engine = engine.replace(old_grading, new_grading)
else:
    print("Could not find grading logic to replace!")

with open("web_app/js/engine.js", "w") as f:
    f.write(engine)

