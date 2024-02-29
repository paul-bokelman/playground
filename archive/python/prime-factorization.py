# python3 ./archive/python/prime-factorization.py

lowest_prime_factors = [2, 3, 5, 7]

# only works for first 4 prime factors
def prime_factorization(x):
    factors = []
    while x % 2 == 0:
        x = x / 2
        factors.append(2)

    prev_x = 0
    while(True):
        if(prev_x is x): # factor wasn't divisible by 
            if(int(x) != 1):
                factors.append(int(x))
            return factors
        else:
            prev_x = x
        for pf in lowest_prime_factors[1:]:
            if(x % pf == 0):
                x = x / pf
                factors.append(pf)
                continue




print(prime_factorization(234))

