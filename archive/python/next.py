l1 = [1, 2, 3, 4, 5]   
l2 = [2, 3, 4, 5, 6, 2, 2]

for n1 in l1:
    l2 = next((n for n in l2 if n1 == n), None)
    if l2 is None:
        print('Element not found', l2)
        break
    else:
        print('All elements found')