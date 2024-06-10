import math

# def gcd(x: int, y: int) -> int:
#     while b != 0:
#         a, b = b, a % b
#     return a

# print(gcd(8324, 156)) # 4

# extended euclidean algorithm
def extended_gcd(a: int, b: int) -> int:
    if a == 0:
        return (b, 0, 1)
    else:
        g, y, x = extended_gcd(b % a, a)
        return (g, x - (b // a) * y, y)
    
print(extended_gcd(8324, 156))


print((math.pow(52, 227)) % 1711)