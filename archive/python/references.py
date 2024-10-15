def maintains_refs(var1: int, var2: int):
    var1 += 2
    var2 *= 5

var1 = 5
var2 = 10

maintains_refs(var1, var2)

print(var1, var2) # nah...