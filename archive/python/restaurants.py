def to_bool(input):
    if input == "y":
        return True
    return False


def is_true(pair):
    _, value = pair
    return value


restaurants = [
    {"name": "Joe's Gourmet Burgers", "is_vegetarian": False,
        "is_vegan": False, "is_gluten": False},
    {"name": "Main Street Pizza Company",
        "is_vegetarian": True, "is_vegan": False, "is_gluten": True},
    {"name": "Corner Cafe", "is_vegetarian": True,
        "is_vegan": True, "is_gluten": True},
    {"name": "Mama's Fine Italian", "is_vegetarian": True,
        "is_vegan": False, "is_gluten": False},
    {"name": "The Chef's Kitchen", "is_vegetarian": True,
        "is_vegan": True, "is_gluten": True}
]

is_vegetarian = to_bool(input("Are you a vegetarian? (y/n): "))
is_vegan = to_bool(input("Are you a vegan? (y/n): "))
is_gluten = to_bool(input("Are you a gluten? (y/n): "))

options = dict(filter(is_true, {"is_vegetarian": is_vegetarian,
               "is_vegan": is_vegan, "is_gluten": is_gluten}.items()))

chosen_restaurants = []

for restaurant in restaurants:
    hits = 0
    for option in options:
        if(restaurant[option] == True):
            hits = hits + 1
    if(len(options) == hits):
        chosen_restaurants.append(restaurant)

print("Here are your restaurant choices: ")
for chosen in chosen_restaurants:
    print(chosen["name"])
