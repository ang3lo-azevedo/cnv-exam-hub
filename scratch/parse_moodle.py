import re, json

with open("extracted_text/cnv-25-26-sample-exam.txt") as f:
    text = f.read()

questions = []
# split by Question \d+
sections = re.split(r'\nQuestion (\d+) Not answered', text)

for i in range(1, len(sections), 2):
    q_num = int(sections[i])
    q_body = sections[i+1]
    
    # Extract the correct answer block
    correct_match = re.search(r'Your answer is incorrect\.\s*(?:partial correct:.*?\.\s*)?(?:The correct answers? (?:is|are):|The correct answer is:)(.*?)(?=\nQuestion \d+ Not answered|\Z)', q_body, flags=re.DOTALL | re.IGNORECASE)
    
    if correct_match:
        correct_text = correct_match.group(1).strip()
        q_body = q_body[:correct_match.start()]
    else:
        # try without "Your answer is incorrect"
        correct_match = re.search(r'The correct answers? (?:is|are):(.*)', q_body, flags=re.DOTALL | re.IGNORECASE)
        if correct_match:
            correct_text = correct_match.group(1).strip()
            q_body = q_body[:correct_match.start()]
        else:
            correct_text = ""
            
    # Check for Solution sketch:
    sol_match = re.search(r'Solution sketch:(.*)', q_body, flags=re.DOTALL)
    if sol_match:
        correct_text = sol_match.group(1).strip()
        q_body = q_body[:sol_match.start()]
        is_open = True
    else:
        is_open = False
        
    # Extract note from incorrect/partial correct
    # Wait, the partial correct is part of "Your answer is incorrect." block.
    # Let's extract options.
    options = []
    opt_match = re.search(r'\s+a\.\s+(.*)', q_body, flags=re.DOTALL)
    if opt_match:
        opt_text = "a. " + opt_match.group(1)
        q_body = q_body[:opt_match.start()]
        # split by b., c., d., e.
        parts = re.split(r'\s+([a-e]\.)\s+', opt_text)
        current_id = 'a'
        current_text = parts[0][3:].strip()
        for j in range(1, len(parts), 2):
            if current_text:
                options.append({'id': current_id, 'text': current_text})
            current_id = parts[j][0]
            current_text = parts[j+1].strip()
        if current_text:
            options.append({'id': current_id, 'text': current_text})
            
    print(f"Q{q_num}: {len(options)} options, is_open={is_open}")
    if q_num == 4:
        print("Q4 correct text:", correct_text[:100])
