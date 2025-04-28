hex = 0x06

og = 0x0000

dot = 1

digit = 1
final = hex
final |= (1 << digit + 8)
if dot:
    final |= (1 << 7)
print('7 6 5 4 3 2 1 0 . g f e d c b a')
binary = format(final, '016b')
print(' '.join(binary))