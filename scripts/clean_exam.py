import re

with open('README_cnv-25-26-sample-exam.md', 'r') as f:
    content = f.read()

# Fix Question 2 (which appears as Question 4)
# We will just strip out the empty Question 2 and Question 3 blocks, and rename Question 4 to Question 2
content = re.sub(r'## Question 2[\s\S]*?## Question 4', '## Question 2', content)

# Do the same for Question 5 (which appears as Question 7)
content = re.sub(r'## Question 5[\s\S]*?## Question 7', '## Question 5', content)

# Add selection boxes [ ]
# Match lines starting with a., b., c., d., e., or <., &, etc. which are OCR artifacts
# Examples: "a. Public cloud.", "<. Hybrid cloud.", "& iload_1"
def add_box(match):
    prefix = match.group(1)
    # clean up OCR errors for bullet points like <. or &
    if prefix in ['<.', '&', '¢', 'e']:
        if prefix == '<.': prefix = 'c.'
        if prefix == '&': prefix = 'a.'
        if prefix == '¢': prefix = 'c.'
        if prefix == 'e': prefix = 'e.'
    return f'- [ ] {prefix} ' + match.group(2)

content = re.sub(r'^(a\.|b\.|c\.|d\.|e\.|<\.|&|¢|e)\s+(.*)', add_box, content, flags=re.MULTILINE)

# Remove any stray "Marked out of \n 1.00" or similar
content = re.sub(r'(?i)Marked out of\s*1\.00\s*(v\d*\s*)?(test\)\s*)?(\(latest\)\s*)?', '', content)
content = re.sub(r'(?i)Marked out of\s*2\.00\s*(v\d*\s*)?(test\)\s*)?(\(latest\)\s*)?', '', content)
content = re.sub(r'(?i)Not answered\s*', '', content)

with open('README_cnv-25-26-sample-exam.md', 'w') as f:
    f.write(content)
