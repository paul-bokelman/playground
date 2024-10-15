test_dict = [{'k1': 'v1', 'k2': 'v2'}, {'k1': 'v1', 'k2': 'v2'}, {'k1': 'v1', 'k2': 'v2'}]

for item in test_dict:
    for key, value in item.items():
        item[key] = value + 'test'

print(test_dict)