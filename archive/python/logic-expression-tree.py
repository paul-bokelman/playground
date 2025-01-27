from typing import Literal, TypedDict, Union
from collections import deque

State = Literal[0, 1]

class BlockSchema(TypedDict):
    name: str
    n_inputs: int
    n_outputs: int
    tree: list[Union[int, Literal["NOT", "AND"]]]

OR_schema: BlockSchema = {
    "name": "OR",
    "n_inputs": 2,
    "n_outputs": 1,
    "tree": ["NOT", 0, "NOT", 1, "AND", 2, 3, "NOT", 4]
}

XOR_schema: BlockSchema = {
    "name": "XOR",
    "n_inputs": 2,
    "n_outputs": 1,
    "tree": ["AND", 0, 1, "NOT", 0, "NOT", 1, "AND", 3, 4, "NOT", 2, "NOT", 5, "AND", 6, 7]
}

NAND_schema: BlockSchema = {
    "name": "NAND",
    "n_inputs": 2,
    "n_outputs": 1,
    "tree": ["AND", 0, 1, "NOT", 2]
}

def AND(a: State, b: State) -> State:
    return a & b

def NOT(a: State) -> State:
    return 1 - a

def compute_expression_tree(schema: BlockSchema, inputs: list[State]) -> list[State]:
    computed: dict[int, State] = {}
    queue = deque(schema["tree"])

    # add inputs to computed
    for i, input_state in enumerate(inputs):
        computed[i] = input_state

    while len(queue) > 0:
        element = queue.popleft()

        # compute AND block
        if element == "AND":
            node_a_id = queue.popleft()
            node_b_id = queue.popleft()
            assert isinstance(node_a_id, int) and isinstance(node_b_id, int)
            computed[len(computed)] = AND(computed[node_a_id], computed[node_b_id])

        if element == "NOT":
            node_id = queue.popleft()
            assert isinstance(node_id, int)
            computed[len(computed)] = NOT(computed[node_id])

    return [computed[len(computed) - 1 - i] for i in range(schema["n_outputs"])]
        

OR = lambda a, b: compute_expression_tree(OR_schema, [a, b])[0]
XOR = lambda a, b: compute_expression_tree(XOR_schema, [a, b])[0]
NAND = lambda a, b: compute_expression_tree(NAND_schema, [a, b])[0]

# test schemas
for inputs in [(0, 0), (0, 1), (1, 0), (1, 1)]:
    print(f"Inputs: {inputs}")
    print(f"OR: {OR(*inputs)}")
    print(f"XOR: {XOR(*inputs)}")
    print(f"NAND: {NAND(*inputs)}")
    print()