with open("web_app/js/engine.js", "r") as f:
    engine = f.read()

target = "let formattedText = q.text.replace(/<strong>\\((.*?)\\)<\\/strong>/g, '<strong><em>($1)</em></strong>');"

insertion = """let formattedText = q.text.replace(/<strong>\\((.*?)\\)<\\/strong>/g, '<strong><em>($1)</em></strong>');
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

engine = engine.replace(target, insertion)

with open("web_app/js/engine.js", "w") as f:
    f.write(engine)
print("Patch 2 applied successfully.")
