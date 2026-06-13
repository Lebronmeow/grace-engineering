import re

with open('/Users/lebron/.gemini/antigravity/brain/71a4ec84-a8e8-4d6f-bfd5-f856acbbfb71/.system_generated/steps/1566/content.md', 'r') as f:
    html = f.read()

# Look for 'code':'...' or similar
matches = re.findall(r'"code":"([^"]+)"', html)
for match in matches:
    if "use client" in match:
        # replace \n with actual newlines
        code = match.replace('\\n', '\n').replace('\\"', '"').replace('\\\\', '\\')
        print(code[:1500])
        print('---')
