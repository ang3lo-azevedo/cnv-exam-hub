import re
import json

with open('exam_content.txt', 'r', encoding='utf-8') as f:
    content = f.read()

sections = content.split('---')
questions = []

for section in sections:
    section = section.strip()
    if not section.startswith('## Question'):
        continue
        
    # Ignore Question 1 which is Identification and Rules
    if 'Identification and Rules' in section:
        continue
        
    # Parse question number
    m_num = re.search(r'## Question (\d+)', section)
    if not m_num:
        continue
    q_num = int(m_num.group(1))
    
    # Extract options
    options = []
    opt_lines = re.findall(r'^- ([a-e])\. (.*)', section, flags=re.MULTILINE)
    for opt in opt_lines:
        options.append({
            'id': opt[0],
            'text': opt[1].strip()
        })
        
    # Is it multiple choice?
    is_multi = 'select all the correct options' in section.lower()
    
    # Find correct answer
    correct_answers_text = ""
    m_correct = re.search(r'\*\*Correct answers?:(.*?)\*\*', section, flags=re.DOTALL)
    if m_correct:
        correct_answers_text = m_correct.group(1).strip()
    
    # Extract question text (everything between ## Question X and *(select...)* or first option)
    q_text_match = re.search(r'## Question \d+\n(.*?)(?=\*\(select|- a\.)', section, flags=re.DOTALL)
    q_text = ""
    if q_text_match:
        q_text = q_text_match.group(1).strip()
        
    # Determine correct option IDs
    correct_ids = []
    # Try to match the exact text of the options to find their IDs
    for opt in options:
        # A bit tricky since correct answer text might not perfectly match, but it usually does.
        # Let's clean up punctuation for matching.
        clean_opt = opt['text'].replace('.', '').strip()
        if clean_opt in correct_answers_text.replace('.', ''):
            correct_ids.append(opt['id'])
    
    # Special case: Question 10 has a code block answer.
    if q_num == 10:
        # In Q10, the correct answer text is:
        # aload_0
        # ldc #3
        # iload_1
        # invokevirtual #1
        # Which matches option e. Let's hardcode this mapping if it fails to detect.
        correct_ids = ['e']
        
    if not correct_ids and options:
        # Try a more fuzzy match
        for opt in options:
            if opt['text'][:10] in correct_answers_text:
                correct_ids.append(opt['id'])

    questions.append({
        'number': q_num,
        'text': q_text,
        'is_multi': is_multi,
        'options': options,
        'correct_ids': correct_ids,
        'explanation': correct_answers_text
    })

with open('interactive_exam/exam_data.json', 'w', encoding='utf-8') as f:
    json.dump(questions, f, indent=4)
