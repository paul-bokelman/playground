from enum import Enum

class Color(Enum):
    RED = 1
    GREEN = 2
    BLUE = 3


def compare_colors(color1, color2):
    if color1 == color2:
        print(f'{color1} is equal to {color2}')
    else:
        print(f'{color1} is not equal to {color2}')

compare_colors(Color.RED, Color.RED)