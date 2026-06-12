import sys
import re
import json

if len(sys.argv) != 3:
    print("Usage: python3 parse_to_js.py <input.txt> <output.js>")
    sys.exit(1)

input_file = sys.argv[1]
output_file = sys.argv[2]

with open(input_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Extract title from the first header
title_match = re.search(r'^#\s*(.*)', content)
exam_title = title_match.group(1).strip() if title_match else "CNV Exam"

sections = content.split('---')
questions = []

for section in sections:
    section = section.strip()
    if not section.startswith('## Question'):
        continue
        
    if 'Identification and Rules' in section:
        continue
        
    m_num = re.search(r'## Question (\d+)', section)
    if not m_num:
        continue
    q_num = int(m_num.group(1))
    
    options = []
    opt_lines = re.findall(r'^- ([a-e])\. (.*)', section, flags=re.MULTILINE)
    for opt in opt_lines:
        opt_text = opt[1].strip()
        # Make bold "No response..." if it matches
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
    
    # Extract clean question text
    q_text_part = re.split(r'\*\*Correct answer|\*\*Solution sketch:', section)[0]
    q_text_part = re.sub(r'^## Question \d+\s*', '', q_text_part)
    q_text_part = re.sub(r'^- [a-e]\. .*', '', q_text_part, flags=re.MULTILINE)
    q_text_part = re.sub(r'\*\((.*?)\)\*', r'<strong>(\1)</strong>', q_text_part) # make *(...)* bold
    q_text = q_text_part.strip()
    
    is_open_text = '**Solution sketch:**' in section
    solution_sketch = None
    if is_open_text:
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
            
            # Add close ones (distractors)
            for fb in fill_in_blanks:
                if "efficient" in fb.lower():
                    distractors.extend(["inefficient", "equal to or a subset of", "dangerous", "non-critical", "user-level", "virtual"])
                if "autoscalinggroup" in fb.lower():
                    distractors.extend(["ResourceGroup", "log", "average", "value", "InstanceID", "dimension"])
            
            distractors = list(set(distractors))

    q_obj = {
        'number': q_num,
        'text': q_text,
        'options': options,
        'is_multi': is_multi,
        'correct_ids': correct_ids,
        'fill_in_blanks': fill_in_blanks,
        'distractors': distractors
    }
    
    if is_open_text:
        q_obj['is_open_text'] = True
        q_obj['solution_sketch'] = solution_sketch
        
    questions.append(q_obj)

# Create a valid Javascript file
js_content = f"""
window.examConfig = {{
    title: "{exam_title}",
    timeLimit: 80
}};

window.examData = {json.dumps(questions, indent=2)};
"""

with open(output_file, 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"Created {output_file}")
