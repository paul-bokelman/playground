# python3 ./archive/python/string-manipulation.py

words = []
sentences = []
end_instances = 0

while True:
    if end_instances == 2:
        break
    word = input()
    if word == '/end':
        end_instances += 1
        continue
    if end_instances == 0:
        words.append(word)
    else:
        sentences.append(word)

blacklisted_chars = ['.', '?', ',', '!']

filtered_sentences = []
for sentence in sentences:
    for char in blacklisted_chars:
        sentence = sentence.replace(char, '')
    filtered_sentences.append(sentence)

for i, sentence in enumerate(filtered_sentences):
    words_in_sentence = sentence.split(' ')
    for j, word in enumerate(words_in_sentence):
        if word in words:
            words_in_sentence[j] = word[::-1]
    filtered_sentences[i] = ' '.join(words_in_sentence)

print(' '.join(filtered_sentences))
