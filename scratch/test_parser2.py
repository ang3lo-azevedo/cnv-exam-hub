import re, json

with open("extracted_text/cnv-25-26-sample-exam.txt") as f:
    content = f.read()

# Normalize the text so that "**Question X**\nNot answered\nMarked out of X\nvY (latest)" 
# becomes "Question X Not answered Marked out of X vY (latest)"
content = re.sub(r'\*\*(Question \d+)\*\*\s*\n\s*(Not answered|Correct|Incorrect|Partially correct)\s*\n\s*(Not graded|Marked out of \d+\.\d+)\s*\n\s*(v\d+(?:\s*\(latest\))?)', r'\1 \2 \3 \4', content)

# Check
if re.search(r'\nQuestion \d+ Not answered', content):
    print("MATCHED MOODLE RAW")
    sections = re.split(r'\nQuestion (\d+) Not answered', content)
    print("Num sections:", len(sections))
    for i in range(1, min(len(sections), 6), 2):
        q_num = int(sections[i])
        q_body = sections[i+1]
        m_marks = re.search(r'^\s*(Not graded|Marked out of (\d+\.\d+))\s+(v\d+)', q_body)
        if m_marks:
            print(f"Q{q_num}: matches {m_marks.group(0)}")
        else:
            print(f"Q{q_num}: NO MATCH for marks. Header is: {q_body[:40]}")
else:
    print("NO MATCH")
