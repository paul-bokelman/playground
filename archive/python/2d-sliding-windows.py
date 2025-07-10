import numpy as np
from numpy.lib.stride_tricks import sliding_window_view

np.random.seed(42)

sequence_length = 10  # Length of the sliding window
stride = sequence_length // 10  # Step size for the sliding window

x_data = np.random.randint(0, 2, (101, 3)) 
y_data = np.random.randint(0, 5, 101)
time_steps, features = x_data.shape

x_windows = np.squeeze(sliding_window_view(x_data, window_shape=(sequence_length, features))[::stride], axis=1)
y_windows = sliding_window_view(y_data, window_shape=sequence_length)[::stride]

print('x_windows shape:', x_windows.shape)
print('y_windows shape:', y_windows.shape)

print('x_data original first rows:\n', x_data[:sequence_length])
print('y_data original first rows:\n', y_data[:sequence_length])

print('\nFirst x_window:\n', x_windows[0])
print('First y_window:\n', y_windows[0])

print('\nLast x_window:\n', x_windows[-1])
print('Last y_window:\n', y_windows[-1])

# Check if the number of windows matches
print('\nNumber of x_windows:', len(x_windows))
print('Number of y_windows:', len(y_windows))

# Check if each x_window aligns with its corresponding y_window
for i in range(3):
    print(f'\nWindow {i}:')
    print('x_window:\n', x_windows[i])
    print('y_window:\n', y_windows[i])
    

target_arr = [1, 4, 3, 1, 3, 2, 2, 0, 4, 3]
bs_index = np.where(np.all(y_windows == target_arr, axis=1))[0][0]
print('\nTarget array:', target_arr)
print('\nIndex of target array in y_windows :', bs_index)

original_corresponding_x_window = x_windows[bs_index]

print('Corresponding x_window:\n', original_corresponding_x_window)

# shuffle windows while keeping alignment
indices = np.arange(len(x_windows))
np.random.shuffle(indices)
x_windows = x_windows[indices]
y_windows = y_windows[indices]

as_index = np.where(np.all(y_windows == target_arr, axis=1))[0][0]
print('\nIndex of target array in shuffled y_windows:', as_index)
shuffled_corresponding_x_window = x_windows[as_index]
print('Corresponding x_window after shuffle:\n', shuffled_corresponding_x_window)

assert np.array_equal(original_corresponding_x_window, shuffled_corresponding_x_window), "The corresponding x_window should remain the same after shuffling."


