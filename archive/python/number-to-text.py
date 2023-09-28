# python3 ./archive/number-to-text.py

num = int(input("Enter integer in range [-99999, 99999] -> "))

# conversion table
conversion = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
    100: "hundred",
    1000: "thousand",
}

phrase = []

# if the number is negative then append 'negative'
if(list(str(num))[0] == '-'):
    phrase.append('negative')

# convert number to absolute value then list
num_arr = list(str(abs(num)))
deconstructed_num = []

# multiples each number in list by it's coefficient x 10s place then adds to deconstructed_num list
for i in range(len(num_arr)):
    deconstructed_num.append(
        int(int(num_arr[i]) * pow(10, (len(num_arr) - 1)) / pow(10, i)))

for value in deconstructed_num:
    value_list = list(str(value))

    num_length = len(value_list)
    coefficient = int(value_list[0])

    # if it's the last number then just append the conversion
    if(num_length == 1 and len(num_arr) == 1):
        phrase.append(conversion[coefficient])

    # if the number is in the hundreds or thousands place then convert the coefficient and append the coef with the multiple of the 10s place
    if(num_length == 3 or (num_length == 4 and len(deconstructed_num) != 5)):
        phrase.append(conversion[coefficient])
        phrase.append(
            conversion[pow(10, num_length if num_length == 2 else num_length - 1)])

    # if the number is in the 10s or 10,000 then convert differently (13 -> thirteen instead of 13 -> one-three)
    if(num_length == 2 or num_length == 5):
        next_coef = conversion[int(deconstructed_num[deconstructed_num.index(
            value) + 1] / ((1) if num_length == 2 else 1000))]

        joined_value = int(str(coefficient) + list(str(deconstructed_num[deconstructed_num.index(
            value) + 1]))[0])

        is_between_lower = joined_value >= 11 and joined_value <= 19

        is_multiple_of_ten = int(list(str(deconstructed_num[deconstructed_num.index(
            value) + 1]))[0]) == 0

        # convert if in special range or just join values
        phrase.append(conversion[joined_value if (is_between_lower) else (coefficient) * 10] if ((is_between_lower) or (is_multiple_of_ten))
                      else conversion[value if num_length == 2 else int(value / 1000)] + "-" + next_coef)

        phrase.append(conversion[1000]) if num_length == 5 else None

print('Text equivalence: ' + ' '.join([str(x) for x in phrase]))
