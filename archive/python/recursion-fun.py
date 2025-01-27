import math
import matplotlib.pyplot as plt

def rec_fun(n):
    if n == 0:
        return 1
    else:
        return rec_fun(math.floor(n/2)) + rec_fun(math.floor(n/2))
    

print(rec_fun(18))


x = [n for n in range(32)]
y = [rec_fun(x) for x in x]

plt.figure(figsize=(8, 6)) 

plt.plot(x, y)

# plt.set_ylabel('rec_fun(n)')
# plt.set_title('Recursion Function Plot')

plt.show()

for x, y in zip(x,y):
    print(f"({x}) -> {y}")
