import numpy as np
import matplotlib.pyplot as plt
binary_train = np.random.randint(0, 2, (40000, 10))  # Example binary spike train data
binned_train = np.random.uniform(0, 2, (100, 10))  # Example binned spike train data

def plot_spike_train(spike_train: np.ndarray, title: str = "Spike Train", xlabel: str = "Time", ylabel: str = "Neuron", cmap: str = "gray") -> None:
    """Plots a binary spike train."""
    plt.figure(figsize=(12, 6))
    plt.imshow(spike_train.T, aspect='auto', cmap=cmap, interpolation='nearest')
    plt.title(title)
    plt.xlabel(xlabel)
    plt.ylabel(ylabel)
    plt.colorbar(label='Spike (1) / No Spike (0)')
    plt.show()

plot_spike_train(binary_train, title="Example Spike Train", xlabel="Time (ms)", ylabel="Neuron Index")
plot_spike_train(binned_train, title="Binned Spike Train", xlabel="Time (ms)", ylabel="Neuron Index", cmap="plasma")