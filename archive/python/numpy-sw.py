import numpy as np
from numpy.lib.stride_tricks import sliding_window_view

# Configuration
sequence_length = 50
n_trials = 13
n_time_steps = 86668
n_features = 23

# Generate dummy data (keep trials separate)
x = np.random.rand(n_trials, n_time_steps, n_features)  # (13, 86668, 23)
y = np.random.rand(n_trials, n_time_steps)  # (13, 86668)

# Initialize containers
X_windows = []
y_targets = []

for trial_idx in range(n_trials):
    # Create sliding windows for X (per trial)
    trial_x = sliding_window_view(x[trial_idx], sequence_length, axis=0)  # (86668-50+1, 50, 23)
    
    # Create corresponding y targets (next time step after each window)
    trial_y = y[trial_idx, sequence_length:]  # (86668-50,)
    
    # Verify alignment
    assert len(trial_x) == len(trial_y) + 1, "Mismatch in trial sequence lengths"
    
    # Trim X to match y length
    trial_x = trial_x[:-1]  # Now (86668-50, 50, 23)
    
    X_windows.append(trial_x)
    y_targets.append(trial_y)

# Combine all trials
X_final = np.vstack(X_windows)  # (13*(86668-50), 50, 23)
y_final = np.concatenate(y_targets).reshape(-1, 1)  # (13*(86668-50), 1)

print("Final Shapes:")
print(f"X: {X_final.shape}")  # (1126034, 50, 23)
print(f"y: {y_final.shape}")   # (1126034, 1)

# Verification
sample_idx = 42  # Test with any index
trial_idx = sample_idx // (n_time_steps - sequence_length)
window_idx = sample_idx % (n_time_steps - sequence_length)

print("\nAlignment Check:")
print(f"Last X value in window {sample_idx}:")
print(X_final[sample_idx, -1])  # Should match original x[trial_idx, window_idx+49]
print(f"Corresponding y value:")
print(y_final[sample_idx])       # Should match original y[trial_idx, window_idx+50]