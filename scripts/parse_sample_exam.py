import re

with open('full_exam.txt', 'r') as f:
    lines = f.readlines()

out = ['# CNV 25-26 Sample Exam\n']
skip = False

for i in range(len(lines)):
    line = lines[i].strip()
    
    # Clean up common OCR errors for question headers
    if re.search(r'(?i)Question\s*\d+', line):
        skip = False
        m = re.search(r'(?i)Question\s*(\d+)', line)
        if m:
            out.append(f'\n## Question {m.group(1)}')
        else:
            out.append('\n## ' + line)
        continue
        
    if skip:
        continue
        
    if ('Your answer is incorrect' in line or 
        'The correct answer is:' in line or 
        'partially correct' in line or 
        'Solution sketch:' in line or
        'The correct answers are:' in line):
        skip = True
        continue
        
    if line in ['Not answered', 'Marked out of 1.00', 'Marked out of 2.00', 'Select one:', 'Select one or more:'] or re.match(r'v\d+ \(latest\)', line):
        continue
        
    if '◄' in line or 'Jump to...' in line or '►' in line or '' == line:
        continue

    if not line and out and not out[-1].strip():
        continue

    if line:
        out.append(line)

with open('README_cnv-25-26-sample-exam.md', 'w') as f:
    f.write('\n'.join(out) + '\n')
