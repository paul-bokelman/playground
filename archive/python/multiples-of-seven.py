# python3 ./archive/multiples-of-seven.py

def multiples_of_seven():
    value = int(input("Enter a positive integer: "))
    value = value - (value % 7)
    sum = 0
    multiples = []
    for i in range(0, int(value / 7) + 1):
        multiples.append(i * 7)
        sum = sum + (i * 7)
    print(*multiples)
    print(sum)


multiples_of_seven()
