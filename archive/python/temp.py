def print_pairs(n: int):
    for i in range(n + 1):
        for j in range(i):
            if i != j:
                print(i, j)


print_pairs(4)