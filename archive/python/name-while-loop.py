# python3 ./archive/name-while-loop.py

def remove_string():
    names_list = ["Joe", "Sarah", "Mike", "Jess", "", "Matt", "", "Greg"]

    names = []

    i = 0
    while i < len(names_list):
        if names_list[i] != "":
            names.append(names_list[i])
        i += 1

    print(' '.join(names))


def get_names():
    friends = ["Aaron", "Ming", "Tynnyfer", "Paula", "Jessica", "Jennifer"]
    selected_names = []

    for name in friends:
        for i in range(len(name)):
            character = name[i]
            if character == 'A' and name.index(character) == 0:
                selected_names.append(name)
            if character == 'e' and name[i + 1] == 'r':
                selected_names.append(name)
    print(selected_names)


get_names()

# remove_string()
