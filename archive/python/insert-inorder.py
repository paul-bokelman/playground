A = [1, 3, 5, 6, None]

cases = {
    0: [0, 1, 3, 5, 6],
    2: [1, 2, 3, 5, 6],
    4: [1, 3, 4, 5, 6],
    7: [1, 3, 5, 6, 7]
}

def insert_inorder(A: list[int], x: int) -> list[int]:
    i = len(A) - 2
    while (i >= 0 and x < A[i]):
        A[i+1] = A[i]
        i = i-1

    A[i+1] = x

    return A


for (x, result) in cases.items():
    insertion_result = insert_inorder(A.copy(), x)
    print(f"Inserting {x}, got: {insertion_result}, expects {result}")
    assert insertion_result == result