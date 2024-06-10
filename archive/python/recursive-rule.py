# set ["M", "I", "Q"]

basis = ["M", "I"]
set = basis

def rule(x):
    set.append("M" + x + "Q")
    set.append("I" + x )

for x in set: 
    if(len(x) <= 5):
        rule(x)

filtered = []

for x in set:
    if(len(x) > 5):
        continue
    filtered.append(x)

print(",".join(filtered))