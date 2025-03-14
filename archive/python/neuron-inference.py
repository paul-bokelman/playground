import numpy as np

def optimize_weights(num_neurons, max_force):
    """Optimized weight distribution using a flexible power base."""
    low, high = 1.1, 2.5
    best_weights = []
    min_error = float('inf')

    for k in np.linspace(low, high, 1000):
        weights = np.array([k**i for i in range(num_neurons)])
        weights *= max_force / np.sum(weights)
        
        error = np.max(np.diff(weights))
        if error < min_error:
            min_error = error
            best_weights = weights

    return list(best_weights)

def activate_neurons(force, weights):
    """Determine neuron activations for a given force."""
    activations = [0] * len(weights)
    accumulated_force = 0

    for i in range(len(weights)):
        if accumulated_force + weights[i] <= force * 1.1:
            activations[i] = 1
            accumulated_force += weights[i]
        else:
            break

    return activations

def evaluate_range(min_force, max_force, weights, steps=100):
    """Evaluate accuracy across the force range."""
    forces = np.linspace(min_force, max_force, steps)
    errors = []
    
    for force in forces:
        activations = activate_neurons(force, weights)
        achieved_force = sum(np.array(weights) * np.array(activations))
        error = abs(achieved_force - force)
        errors.append(error)
    
    return np.mean(errors), np.max(errors)

num_neurons = 29
max_force = 1.2
force_range = (0, 1.2)

weights = optimize_weights(num_neurons, max_force)
mean_error, max_error = evaluate_range(force_range[0], force_range[1], weights)

print("Optimized Weights:", weights)
print(f"Mean Error: {mean_error:.4f}")
print(f"Max Error: {max_error:.4f}")

test_forces = [0.3, 0.22, 1.1, 0.6, 0.9, 1.2]
for force in test_forces:
    activations = activate_neurons(force, weights)
    achieved = sum(np.array(weights) * np.array(activations))
    print(f"\nTarget force: {force:.1f}")
    print(f"Achieved force: {achieved:.4f}")
    print(f"Activations: {activations}")