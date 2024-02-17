input = "200-W456"

input = input.split("-") # ['200', 'W456']
games = [
    {"name": "player1", "elo": int(input[0]), "outcome": input[1][0]},
    {"name": "player2", "elo": int(input[1][1:]), "outcome": input[1][0]}
]

print(games)