from typing import Union

s = [2.57, 2.60, 1.93, 1.58, 2.30, 0.84, 2.65, 0.08, 2.74, 2.53, 2.13, 2.86, 2.31, 1.91]
rounding: Union[int, None] = 3

cooler = [1.59, 1.43, 1.88, 1.26, 1.91, 1.86, 1.90, 1.57, 1.79, 1.72, 2.41, 2.34, 0.94, 1.34, 1.76]
control = [1.92, 2.00, 2.19, 1.12, 1.78, 1.84, 2.45, 2.03, 1.52, 0.51, 1.90]
warmer = [2.57, 2.60, 1.93, 1.58, 2.30, 0.84, 2.65, 0.08, 2.74, 2.53, 2.13, 2.86, 2.31, 1.91]

def mean(s):
    return sum(s) / len(s)

def range(s):
    return max(s) - min(s)

def median(s):
    s.sort()
    n = len(s)

    if n % 2 == 0:
        return (s[n // 2] + s[n // 2 - 1]) / 2
    else:
        return s[n // 2]

def sample_variance(s):
    return sum(([(x - mean(s)) ** 2 for x in s])) / (len(s) - 1)

def standard_deviation(s):
    return sample_variance(s) ** 0.5

print(f"Mean: {round(mean(s), rounding) if rounding is not None else mean(s)}")
print(f"Median: {round(median(s), rounding) if rounding is not None else median(s)}")
print(f"Range: {round(range(s), rounding) if rounding is not None else range(s)}")
print(f"Sample Variance: {round(sample_variance(s), rounding) if rounding is not None else sample_variance(s)}")
print(f"Sample Standard Deviation: {round(standard_deviation(s), rounding) if rounding is not None else standard_deviation(s)}")
