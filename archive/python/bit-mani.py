hex = 0x5ADFACE5

digit = 1
print((hex & (0xF << (digit * 4))) >> (digit * 4))
print((hex >> digit *4) & 0xF)
# print((0xF << (digit * 4)))