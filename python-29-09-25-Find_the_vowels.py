def vowel_indices(word):
    arr = []
    for i in range(len(word)):
        if word[i].lower() in "aeiouy":
            arr.append(i+1)
    return arr