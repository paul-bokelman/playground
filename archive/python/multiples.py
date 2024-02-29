# python3 ./archive/multiples.py

def multiples(n: int, d: int) -> int:
    n = n - (n % d)
    sum = 0
    multiples = []
    for i in range(0, int(n / d) + 1):
        multiples.append(i * d)
        sum = sum + (i * d)
    print("multiples: " + ' '.join(str(x) for x in multiples))
    print("sum: " + str(sum))
    return (multiples, sum)


multiples(49, 7)
