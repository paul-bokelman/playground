# arbitrary test values
lower_neutral, upper_neutral = 0.04, 0.17
min_x, max_x = -1, 1
min_y, max_y = 0, 6
up_target = 4.2
down_target = 3.6
offset = 0.1

# lower throttle function
def lower_f(x: float) -> float:
    m = (min_y - max_y) / (lower_neutral - min_x)
    b = min_y - m * lower_neutral
    return m * x + b

# upper throttle function
def upper_f(x: float) -> float:
    m = (max_y - min_y) / (max_x - upper_neutral)
    b = min_y - m * upper_neutral
    return m * x + b

# throttle function
def f(x: float) -> float:
    if x > max_x:
        raise ValueError(f"x must be less than or equal to {max_x}")
    elif x < min_x:
        raise ValueError(f"x must be greater than or equal to {min_x}")

    if x < lower_neutral:
        return lower_f(x)
    elif x > upper_neutral:
        return upper_f(x)
    else:
        return 0
    
# distance between throttle and it's target cps
def d(x: float) -> float:
    if x < lower_neutral:
        return down_target - f(x)
    elif x > upper_neutral:
        return up_target - f(x)
    
    raise ValueError(f"x must be less than {lower_neutral} or greater than {upper_neutral}")

def within_margin(x: float, margin: float) -> bool:
    return abs(d(x)) <= margin