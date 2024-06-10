import string
import math

chars = list(string.ascii_lowercase)

# ------------------------------- CAESAR SHIFT ------------------------------- #

def caesar_shift_enc(text: str, shift: int) -> str:
    enc = ''
    for char in text:
        enc += (chars[(chars.index(char) - shift) % len(chars)])
    return enc

def caesar_shift_dec(text: str, shift: int) -> str:
    dec = ''
    for char in text:
        dec += (chars[(chars.index(char) + shift) % len(chars)])
    return dec

print(caesar_shift_enc("tim", 12))
print(caesar_shift_dec("accb", 12))

# ------------------------------- PRODUCT CIPHER ------------------------------- #

def product_enc(text: str, multiple: int, max: int) -> str:
    mod = len(chars) + 1 if max == None else max
    enc = ''
    for char in text:
        enc += (chars[(((chars.index(char) + 1) * multiple) % mod) - 1])
    return enc

def product_dec(text: str, multiple: int, max: int) -> str:
    mod = len(chars) + 1 if max == None else max
    dec = ''
    for char in text:
        dec += (chars[((chars.index(char) + 1) * multiple) % mod])
    return dec

print(product_enc("room", 5, None))
print(product_enc("fill", 5, None))
print(product_enc('nyff', 11, None))
print(product_enc('ies', 11, None))

# --------------------- ENCODING AND DECODING ENCRYPTION --------------------- #

def encode(text: str) -> int:
    sum = 0
    for i, char in enumerate(text):
        sum += chars.index(char) * math.pow(len(chars), i)
    return sum

def encrypt(text: int,  multiple: int, mod: int) -> int:
    return (encode(text) * multiple) % mod

def decode(enc: int) -> str:
    str = ""
    for i in range(0, 4):
        str += chars[int((enc / math.pow((len(chars)), i)) % 26)]
    return str

def decrypt(encrypted: int, multiple: int, mod: int) -> int:
    return decode((encrypted * multiple) % mod)

(enc_multiple, dec_multiple, mod) = (363173, 239325, 456976)


def total_decrypt(text: str) -> str:
    return decrypt(encode(text), dec_multiple, mod)

print(decrypt(encrypt('pump', enc_multiple, mod), dec_multiple, mod)) # pump
print(total_decrypt('zwtu'))
print(decrypt(encode('exzj'), 7833, 456976))



    