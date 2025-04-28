import re

def extract_tag_content(text, tag):
    pattern = fr"<{tag}>(.*?)</{tag}>"
    match = re.search(pattern, text, re.DOTALL)
    return match.group(1) if match else None

string = """<character_analysis>test</character_analysis>"""
tag = "character_analysis"

result = extract_tag_content(string, tag)
print(result)  # Output: test