import math

def decimalToBinary(decimal: int) -> str:
    n = 0
    while(decimal > math.pow(2, n + 1)):
        n = n + 1
    ordered_binary_values = [0] * int(n + 1)
    for current_n in reversed(list(range(0, n + 1))):
        if(decimal == 0): break
        current_n_value = int(math.pow(2, current_n))
        if(current_n_value <= decimal):
            ordered_binary_values[(len(ordered_binary_values) - current_n) - 1] = current_n_value
            decimal = decimal - current_n_value
    return "".join([str(1) if v != 0 else str(0) for v in ordered_binary_values])

def binaryToDecimal(bs: str) -> int:
    binary_values = []
    for index, value in enumerate(bs):
        value = int(value)
        if(value == 0):
            continue
        binary_values.append(math.pow(2, len(bs) - 1 - index))
    return int(sum(binary_values))


binary_string = decimalToBinary(8324)
value = binaryToDecimal(binary_string)
print(value) # 8324