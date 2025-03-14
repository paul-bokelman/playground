import numpy as np
import random

def hit(fleet, x, y):
    if fleet[x, y] != 0:
        return "Hit"
    return "Miss"

size = 10

fleet = np.zeros((size, size), dtype=int)


fleet[0:5, 6] = 1
fleet[2, 1:4] = 2

# moves

hit(fleet, 0, 6)

print(hit(fleet, 8, 8))
# fleet[2, 1] *= -1

# hits: 4,3 | 4,4 | 4,5 | 4,6 | 

print(fleet)