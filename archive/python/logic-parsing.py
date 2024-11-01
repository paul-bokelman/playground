from typing import Literal, TypedDict

State = Literal[0, 1]

class EdgeRelation(TypedDict):
    block: Literal["NOT", "AND", "NONE"]
    inputs: list[int]

class BlockSchema(TypedDict):
    name: str
    n_inputs: int
    n_outputs: int
    edges: dict[int, EdgeRelation]

OR_schema: BlockSchema = {
    "name": "XOR",
    "n_inputs": 2,
    "n_outputs": 1,
    "edges": {
        6: {"block": "NONE", "inputs": [5]},
        5: {"block": "NOT", "inputs": [4]},
        4: {"block": "AND", "inputs": [3,2]},
        3: {"block": "NOT", "inputs": [1]},
        2: {"block": "NOT", "inputs": [0]}
    }
}

XOR_schema: BlockSchema = {
    "name": "OR",
    "n_inputs": 2,
    "n_outputs": 1,
    "edges": {
        9: {"block": "NONE", "inputs": [8]},
        8: {"block": "AND", "inputs": [6,7]},
        7: {"block": "NOT", "inputs": [5]},
        6: {"block": "NOT", "inputs": [2]},
        5: {"block": "AND", "inputs": [3, 4]},
        4: {"block": "NOT", "inputs": [1]},
        3: {"block": "NOT", "inputs": [0]},
        2: {"block": "AND", "inputs": [0, 1]}
    }
}

NAND_schema: BlockSchema = {
    "name": "OR",
    "n_inputs": 2,
    "n_outputs": 1,
    "edges": {
        4: {"block": "NONE", "inputs": [3]},
        3: {"block": "NOT", "inputs": [2]},
        2: {"block": "AND", "inputs": [0, 1]}
    }
}

def AND(a: State, b: State) -> State:
    return a & b

def NOT(a: State) -> State:
    return 1 - a

def compute_schema(schema: BlockSchema, inputs: list[State]) -> list[State]:
    computed: dict[int, State] = {}

    # set inputs as computed
    for (i, state) in enumerate(inputs):
        computed[i] = state

    # recursively resolve node by id
    def resolve(id: int) :
        # value already computed -> skip
        if id in computed:
            return computed[id]
        
        inputs: list[State] = []

        # compute nodes input values
        for input_id in schema['edges'][id]['inputs']:
            inputs.append(resolve(input_id))

        block_type = schema['edges'][id]['block']

        # more than 2 inputs -> can't use AND or NOT block
        if len(inputs) > 2:
            raise ValueError("Inputs must be a max length of 2")

        # AND block -> ensure 2 inputs and use AND operation
        if block_type == "AND":
            if len(inputs) != 2:
                raise ValueError("AND gate requires 2 inputs")
            computed[id] = AND(*inputs)

        # NOT block -> ensure 1 input and use NOT operation
        elif block_type == "NOT":
            if len(inputs) > 1:
                raise ValueError("NOT gate requires only 1 input")
            computed[id] = NOT(inputs[0])
        
        # no change -> ensure 1 input and use unchanged input value
        else: 
            if len(inputs) > 1:
                raise ValueError("Empty gate requires only 1 input")
            computed[id] = inputs[0]

        return computed[id]
        
    output_ids: list[int] = []

    total = max(schema['edges'].keys()) # get max key from edges

    # recursively compute outputs
    for i in range(0, schema['n_outputs']):
        id = total - i
        output_ids.append(id)
        resolve(id)

    return [computed[id] for id in output_ids]


XOR = lambda a, b: compute_schema(XOR_schema, [a, b])[0]
OR = lambda a, b: compute_schema(OR_schema, [a, b])[0]
NAND = lambda a, b: compute_schema(NAND_schema, [a, b])[0]

# test schemas
for inputs in [(0, 0), (0, 1), (1, 0), (1, 1)]:
    print(f"Inputs: {inputs}")
    print(f"XOR: {XOR(*inputs)}")
    print(f"OR: {OR(*inputs)}")
    print(f"NAND: {NAND(*inputs)}")
    print()