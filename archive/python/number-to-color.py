def num_to_color(value, min_val, max_val):
    """Converts a numerical value to a color on a red-green gradient.

    Args:
        value: The numerical value to convert.
        min_val: The minimum value in the range.
        max_val: The maximum value in the range.

    Returns:
        A tuple representing the RGB color value.
    """

    # Normalize the value to the range 0-1
    normalized_value = (value - min_val) / (max_val - min_val)

    # Calculate the color components
    red = 255 * (1 - normalized_value)
    green = 255 * normalized_value
    blue = 0

    return int(red), int(green), int(blue)


value = 60
min_val = 0
max_val = 64

color = num_to_color(value, min_val, max_val)
print(color)