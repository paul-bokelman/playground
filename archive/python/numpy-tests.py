import numpy as np

z = np.array([1, 2, 3, 4, 5])

def soft_max(z: np.ndarray) -> np.ndarray:
    z = z.reshape(-1, 1) if len(z.shape) == 1 else z
    # outputs - max in that row to remove one of the 2 values (becomes 1), exponentiate other value
    exp_z = np.exp(z - np.max(z, axis=0, keepdims=True)) 
    # take each expo'd value and divide it by the sum of the row for weight in row (probability)
    probabilities: np.ndarray = exp_z / np.sum(exp_z, axis=0, keepdims=True)
    return probabilities

print(soft_max(z).T.shape)