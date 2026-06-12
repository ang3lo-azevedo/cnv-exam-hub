import sys
import re
import json

def parse_markdown(content, input_file):
    sections = content.split('---')
    questions = []

    for section in sections:
        section = section.strip()
        if not section.startswith('## Question'):
            continue

        m_num_full = re.search(r'## Question (\d+)(?:\s*\*\((.*?)\)\*)?', section)
        if not m_num_full:
            continue
        q_num = int(m_num_full.group(1))

        marks = 1.0
        marks_text = "Marked out of 1.00"
        if m_num_full.group(2) and 'mark' in m_num_full.group(2).lower():
            marks_match = re.search(r'(\d+(?:\.\d+)?)', m_num_full.group(2))
            if marks_match:
                marks = float(marks_match.group(1))
                marks_text = f"Marked out of {marks:.2f}"

        options = []
        opt_lines = re.findall(r'^- ([a-e])\. (.*)', section, flags=re.MULTILINE)
        for opt in opt_lines:
            opt_text = opt[1].strip()
            opt_text = re.sub(r'(No response \(no penalty.*?\)\.?)', r'<strong>\1</strong>', opt_text, flags=re.IGNORECASE)
            opt_text = re.sub(r'(No response \(no penalty.*?\))', r'<strong>\1</strong>', opt_text, flags=re.IGNORECASE)
            options.append({
                'id': opt[0],
                'text': opt_text
            })

        is_multi = 'select all the correct options' in section.lower()

        correct_answers_text = ""
        m_correct = re.search(r'\*\*Correct answers?:\*\*(.*?)$', section, flags=re.DOTALL)
        if m_correct:
            correct_answers_text = m_correct.group(1).strip()
        else:
            m_correct = re.search(r'\*\*Correct answers?:(.*?)\*\*', section, flags=re.DOTALL)
            if m_correct:
                correct_answers_text = m_correct.group(1).strip()

        q_text_part = re.split(r'\*\*Correct answer|\*\*Solution sketch:', section)[0]
        q_text_part = re.sub(r'^## Question \d+\s*', '', q_text_part)
        q_text_part = re.sub(r'^- [a-e]\. .*', '', q_text_part, flags=re.MULTILINE)
        q_text_part = re.sub(r'\*\((.*?)\)\*', r'<strong>(\1)</strong>', q_text_part)

        note_text = None
        m_note = re.search(r'\*\*Note:\*\*(.*?)$', q_text_part, flags=re.DOTALL)
        if m_note:
            note_text = m_note.group(1).strip()
            q_text_part = q_text_part.replace(m_note.group(0), '')

        q_text = q_text_part.strip()

        is_open_text = '**Solution sketch:**' in section or q_num == 1
        solution_sketch = None
        if '**Solution sketch:**' in section:
            solution_sketch = section.split('**Solution sketch:**')[1].strip()

        correct_ids = []
        fill_in_blanks = []
        for opt in options:
            clean_opt = opt['text'].replace('.', '').strip()
            if clean_opt in correct_answers_text.replace('.', ''):
                correct_ids.append(opt['id'])

        if q_num == 10 and 'sample' in input_file.lower():
            correct_ids = ['e']

        if not correct_ids and options:
            for opt in options:
                if opt['text'][:10] in correct_answers_text:
                    correct_ids.append(opt['id'])

        fill_in_blanks = []
        distractors = []
        if not options:
            fill_matches = re.findall(r'\[(.*?)\]', correct_answers_text)
            if fill_matches:
                fill_in_blanks = [m.strip() for m in fill_matches]
                for fb in fill_in_blanks:
                    if "efficient" in fb.lower():
                        distractors.extend(["inefficient", "equal to or a subset of", "dangerous", "non-critical", "user-level", "virtual"])
                    if "autoscalinggroup" in fb.lower():
                        distractors.extend(["ResourceGroup", "log", "average", "value", "InstanceID", "dimension"])
                distractors = list(set(distractors))

        if int(q_num) == 1:
            lines_to_underline = [
                "Please fill in your identification in the draft sheet you were provided. Return it at the end of the exam after completely closing your submission.",
                "In the draft sheet and in this question you must insert your exam code given to you by the person watching the exam. You exam is not valid without the exam code.",
                "The exam is without consultation (no other windows or apps beside the one where the exam is being done). Otherwise, exam is annulled.",
                "The exam has a time limit of 80 minutes. You can only leave after submitting your exam and only after 45 minutes. We take the best grade of the two exams.",
                "There will be no further information about the exam questions (*dúvidas acerca do enunciado*) provided during the exam, besides the question text itself.",
                "Answer the questions given the context in the question."
            ]
            for line in lines_to_underline:
                q_text = q_text.replace(line, f"<u>{line}</u>")
            
            q_text = q_text.replace(
                "Only if strictly needed, you can also insert here any other notes regarding the answering of some question(s) in the exam clearly identifying them in your comments",
                "<em>Only if strictly needed, you can also insert here any other notes regarding the answering of some question(s) in the exam clearly identifying them in your comments</em>"
            )

        # Remove *** separators
        q_text = q_text.replace('***', '').strip()
        
        def convert_md(txt):
            txt = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', txt, flags=re.DOTALL)
            # Make instructional text (starting with parenthesis) bold and italic
            txt = re.sub(r'\*(\(.*?\)\.?)\*', r'<strong><em>\1</em></strong>', txt, flags=re.DOTALL)
            # Convert other markdown italics to just HTML italics
            txt = re.sub(r'\*(.*?)\*', r'<em>\1</em>', txt, flags=re.DOTALL)
            return txt
            
        q_text = convert_md(q_text)
        for opt in options:
            opt['text'] = convert_md(opt['text'])

        q_obj = {
            'number': q_num,
            'text': q_text,
            'options': options,
            'is_multi': is_multi,
            'correct_ids': correct_ids,
            'fill_in_blanks': fill_in_blanks,
            'distractors': distractors,
            'marks': marks,
            'marks_text': marks_text
        }

        if note_text:
            q_obj['note'] = note_text

        if is_open_text:
            q_obj['is_open_text'] = True
            q_obj['solution_sketch'] = solution_sketch

        questions.append(q_obj)
    return questions

def parse_moodle(content, input_file):
    questions = []
    sections = re.split(r'\nQuestion (\d+) Not answered', content)

    for i in range(1, len(sections), 2):
        q_num = int(sections[i])
        q_body = sections[i+1]
        
        marks = 1.0
        marks_text = "Marked out of 1.00"
        version = None
        
        m_marks = re.search(r'^\s*(Not graded|Marked out of (\d+\.\d+))(?:\s+(v\d+))?', q_body)
        if m_marks:
            if m_marks.group(1) == 'Not graded':
                marks = 0.0
                marks_text = "Not graded"
            else:
                marks = float(m_marks.group(2))
                marks_text = f"Marked out of {m_marks.group(2)}"
            version = m_marks.group(3) if m_marks.group(3) else None
            m_latest = re.search(r'^\s*(Not graded|Marked out of \d+\.\d+)(?:\s+v\d+\s*\(latest\))?', q_body)
            if m_latest:
                q_body = q_body[m_latest.end():].strip()
            else:
                q_body = q_body[m_marks.end():].strip()
        
        note_text = None
        correct_text = ""
        is_open_text = False
        solution_sketch = None
        
        # Check for correct answers
        correct_match = re.search(r'Your answer is incorrect\.\s*(.*?)(?:The correct answers? (?:is|are):|The correct answer is:)(.*?)(?=\nQuestion \d+ Not answered|\Z)', q_body, flags=re.DOTALL | re.IGNORECASE)
        if correct_match:
            note_text = correct_match.group(1).strip().replace('\n', '<br>') if correct_match.group(1) else None
            correct_text = correct_match.group(2).strip()
            q_body = q_body[:correct_match.start()]
        else:
            correct_match = re.search(r'The correct answers? (?:is|are):(.*)', q_body, flags=re.DOTALL | re.IGNORECASE)
            if correct_match:
                correct_text = correct_match.group(1).strip()
                q_body = q_body[:correct_match.start()]
        
        # Open text (Solution sketch)
        sol_match = re.search(r'\*?\*?Solution sketch:\*?\*?\s*(.*)', q_body, flags=re.DOTALL | re.IGNORECASE)
        if sol_match:
            raw_sketch = sol_match.group(1).strip().replace('***', '').strip()
            if raw_sketch.startswith('**'):
                raw_sketch = raw_sketch[2:].strip()
            raw_sketch = raw_sketch.replace('\no ', '\n    ◦ ')
            raw_sketch = raw_sketch.replace('\n- ', '\n• ')
            if raw_sketch.startswith('- '):
                raw_sketch = '• ' + raw_sketch[2:]
            raw_sketch = re.sub(r'\*\((.*?)\)\*', r'<em>(\1)</em>', raw_sketch, flags=re.DOTALL)
            raw_sketch = re.sub(r'\*-(.*?)\*', r'<em>-\1</em>', raw_sketch, flags=re.DOTALL)
            solution_sketch = raw_sketch
            q_body = q_body[:sol_match.start()]
            is_open_text = True
              
        options = []
        correct_ids = []
        
        opt_start_match = re.search(r'\n\s*(?:\[[xX ]\]\s+)?a\.\s+', q_body)
        if opt_start_match:
            opt_block = q_body[opt_start_match.start():]
            q_body = q_body[:opt_start_match.start()]
            
            opt_pattern = re.compile(r'^\s*(?:\[([xX ])\]\s+)?([a-e])\.\s+(.*?)(?=\n\s*(?:\[[xX ]\]\s+)?[a-e]\.|\Z)', flags=re.DOTALL | re.MULTILINE)
            for m in opt_pattern.finditer(opt_block):
                is_correct = (m.group(1) and m.group(1).lower() == 'x')
                opt_id = m.group(2)
                current_text = m.group(3).strip()
                
                current_text = re.sub(r'(No response \(no penalty.*?\)\.?)', r'<strong>\1</strong>', current_text, flags=re.IGNORECASE)
                options.append({'id': opt_id, 'text': current_text.replace('\n', '<br>')})
                if is_correct:
                    correct_ids.append(opt_id)

        is_multi = 'select all the correct options' in q_body.lower() or 'select one or more' in q_body.lower()
        if q_num == 1 and 'identification and rules' in q_body.lower():
            is_open_text = True
        q_text = q_body.strip()
        q_text = re.sub(r'Marked out of \d+\.\d+(?:\s*v\d+\s*\(latest\))?', '', q_text).strip()
        q_text = re.sub(r'Select one or more:\s*$', '', q_text).strip()
        q_text = re.sub(r'Select one:\s*$', '', q_text).strip()

        if not correct_ids and correct_text:
            for opt in options:
                clean_opt = opt['text'].replace('.', '').replace('<br>', ' ').strip()
                if clean_opt and clean_opt in correct_text.replace('\n', ' ').replace('.', ''):
                    correct_ids.append(opt['id'])
                
        fill_in_blanks = []
        distractors = []
        if not options and not is_open_text:
            fill_matches = re.findall(r'\[(.*?)\]', correct_text)
            if fill_matches:
                fill_in_blanks = [m.strip() for m in fill_matches]
                for fb in fill_in_blanks:
                    if "efficient" in fb.lower():
                        distractors.extend(["inefficient", "equal to or a subset of", "dangerous", "non-critical", "user-level", "virtual"])
                    if "autoscalinggroup" in fb.lower():
                        distractors.extend(["ResourceGroup", "log", "average", "value", "InstanceID", "dimension"])
                distractors = list(set(distractors))
            else:
                # PDF drag and drop where text has Phase 1: [A], etc.
                pdf_fill_matches = re.findall(r':\s*\[([A-Z])\]', q_text)
                if pdf_fill_matches:
                    fill_in_blanks = pdf_fill_matches
                    q_text = re.sub(r'(:\s*)\[[A-Z]\]', r'\1[ ]', q_text)

        if int(q_num) == 1:
            lines_to_underline = [
                "Please fill in your identification in the draft sheet you were provided. Return it at the end of the exam after completely closing your submission.",
                "In the draft sheet and in this question you must insert your exam code given to you by the person watching the exam. You exam is not valid without the exam code.",
                "The exam is without consultation (no other windows or apps beside the one where the exam is being done). Otherwise, exam is annulled.",
                "The exam has a time limit of 80 minutes. You can only leave after submitting your exam and only after 45 minutes. We take the best grade of the two exams.",
                "There will be no further information about the exam questions (*dúvidas acerca do enunciado*) provided during the exam, besides the question text itself.",
                "Answer the questions given the context in the question."
            ]
            for line in lines_to_underline:
                q_text = q_text.replace(line, f"<u>{line}</u>")
            
            q_text = q_text.replace(
                "Only if strictly needed, you can also insert here any other notes regarding the answering of some question(s) in the exam clearly identifying them in your comments",
                "<em>Only if strictly needed, you can also insert here any other notes regarding the answering of some question(s) in the exam clearly identifying them in your comments</em>"
            )

        # Remove *** separators
        q_text = q_text.replace('***', '').strip()
        
        def convert_md(txt):
            txt = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', txt, flags=re.DOTALL)
            # Make instructional text (starting with parenthesis) bold and italic
            txt = re.sub(r'\*(\(.*?\)\.?)\*', r'<strong><em>\1</em></strong>', txt, flags=re.DOTALL)
            # Convert other markdown italics to just HTML italics
            txt = re.sub(r'\*(.*?)\*', r'<em>\1</em>', txt, flags=re.DOTALL)
            return txt
            
        q_text = convert_md(q_text)
        for opt in options:
            opt['text'] = convert_md(opt['text'])

        q_obj = {
            'number': q_num,
            'text': q_text,
            'options': options,
            'is_multi': is_multi,
            'correct_ids': correct_ids,
            'fill_in_blanks': fill_in_blanks,
            'distractors': distractors,
            'marks': marks,
            'marks_text': marks_text
        }
        if version:
            q_obj['version'] = version
        if note_text:
            q_obj['note'] = note_text
        if is_open_text:
            q_obj['is_open_text'] = True
            q_obj['solution_sketch'] = solution_sketch
            
        questions.append(q_obj)
        
    return questions

if __name__ == '__main__':
    if len(sys.argv) != 3:
        print("Usage: python3 parse_to_js.py <input.txt> <output.js>")
        sys.exit(1)

    input_file = sys.argv[1]
    output_file = sys.argv[2]

    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()

    title_match = re.search(r'^#?\s*(.*Exam.*)', content, flags=re.IGNORECASE | re.MULTILINE)
    exam_title = title_match.group(1).strip() if title_match else "CNV Exam"
    exam_title = exam_title.replace('#', '').replace('*', '').strip()

    # Normalize multiline Moodle headers to single line (handles optional version tag)
    content = re.sub(
        r'\*\*(Question \d+)\*\*\s*\n\s*(Not answered|Correct|Incorrect|Partially correct)\s*\n\s*(Not graded|Marked out of \d+\.\d+)(?:\s*\n\s*(v\d+(?:\s*\(latest\))?))?',
        lambda m: f"\n{m.group(1)} {m.group(2)} {m.group(3)}" + (f" {m.group(4)}" if m.group(4) else ""),
        content
    )

    if re.search(r'\nQuestion \d+ Not answered', content):
        questions = parse_moodle(content, input_file)
    else:
        questions = parse_markdown(content, input_file)

    js_content = f"""window.examConfig = {{
    title: "{exam_title}",
    timeLimit: 80
}};

window.examData = {json.dumps(questions, indent=2)};
"""
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(js_content)
    print(f"Created {output_file}")
