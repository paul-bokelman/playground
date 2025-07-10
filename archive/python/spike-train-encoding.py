import numpy as np
import matplotlib.pyplot as plt
import random
sampling_rate = 1000  # Hz
bin_size = 10

np.random.seed(42)  # For reproducibility
random.seed(42)  # For reproducibility

def bin_spikes(trains: np.ndarray , bin_size: int = bin_size) -> np.ndarray:
    """Bins and normalizes incoming spike train data"""
    time_steps, neurons = trains.shape # T is the number of time steps, N is the number of neurons
    n_bins = time_steps // bin_size # Number of bins

    binned_spikes: np.ndarray = trains[:n_bins * bin_size].reshape(n_bins, bin_size, neurons).sum(axis=1) # sum spikes in each bin
    return binned_spikes / bin_size  # normalize by bin size
    # return binned_spikes

def exp_decay_filter(signal: np.ndarray, tau=1): # bin size * tau = time constant
    """Exponential decay filter of a 1d signal. Tau is the time constant that regulates the decay speed, higher tau means slower decay."""
    filtered = np.zeros_like(signal, dtype=float)
    filtered[0] = signal[0]  # Start with the first value of the signal
    alpha = np.exp(-1 / tau)
    for t in range(1, len(signal)):
        filtered[t] = filtered[t-1] * alpha + signal[t]
    return filtered

def exponential_decay(trains: np.ndarray, tau: int = 5) -> np.ndarray:
    """Applies an exponential decay filter to the incoming spike train data."""
    filtered_train = np.zeros_like(trains)
    alpha = np.exp(-1 / tau)
    filtered_train[0, :] = trains[0, :]
    for t in range(1, trains.shape[0]):
        filtered_train[t, :] = filtered_train[t-1, :] * alpha + trains[t, :]

    return filtered_train

def process_trial(spike_train: np.ndarray, bin_size: int = bin_size, tau: int = 5) -> np.ndarray:
    """Processes a single trial of spike train data."""
    binned_spikes = bin_spikes(spike_train, bin_size)
    filtered_spikes = exponential_decay(binned_spikes, tau)
    amplified_spike_trains = amplify_spike_trains(filtered_spikes)
    # z_spikes = (filtered_spikes - np.mean(filtered_spikes, axis=0)) / np.std(filtered_spikes, axis=0)
    return filtered_spikes

def generate_trial():
    duration = random.randint(800, 2000)  # time steps
    n_neurons = random.randint(5, 20)  # number of neurons
    firing_rates = np.random.uniform(10, 50, n_neurons) # random firing rates per neuron (Hz)

    spike_train = np.zeros((duration, n_neurons), dtype=int)
    for n in range(n_neurons):
        p_spike = firing_rates[n] / sampling_rate # probability of spike per time step (assuming 1 ms per step)
        spike_train[:, n] = np.random.rand(duration) < p_spike

    return spike_train

def normalize_trials(trials: list[np.ndarray]):
    """Z-score normalizes each neuron within each trial independently."""
    normalized = []
    for trial in trials:
        mean = trial.mean(axis=1, keepdims=True)
        std = trial.std(axis=1, keepdims=True)
        std[std == 0] = 1
        normalized.append((trial - mean) / std)
    return normalized

trials = [generate_trial() for _ in range(10)]
modified_trials = [process_trial(trial).T for trial in trials]

# normalize_trials(modified_trials)

mvc_levels = np.array([random.choice([5, 10, 20, 40, 60]) for _ in range(len(modified_trials))])

max_neurons = max([t.shape[0] for t in modified_trials]) + 1 # add +1 for the additional 

print(max_neurons)

# add mvc level as a neuron to each trial
for i, trial in enumerate(modified_trials):
    neurons, time_steps = trial.shape
    mvc_level = mvc_levels[i] / 100
    neuron_padding = np.zeros((max(0, max_neurons - neurons - 1), time_steps))
    mvc = np.full((1, time_steps), mvc_level)
    constituents = [trial, mvc] + ([neuron_padding] if neurons != max_neurons else [])
    modified_trials[i] = np.concatenate(constituents, axis=0)

print([t.shape for t in modified_trials]) 
print(modified_trials[4].shape)
print(modified_trials[4][7, :]) 
# print(modified_trials[9])

def amplify_spike_trains(spike_trains: np.ndarray, factor: float = 1.5) -> np.ndarray:
    """Amplifies the spike trains by a given factor."""
    amplification_factors = np.arange(1, spike_trains.shape[0] + 1) * factor # linear amplification based on neuron index
    first_activations = np.argmax(spike_trains > 0, axis=1)
    neuron_order = np.argsort(first_activations)
    return spike_trains[neuron_order] * amplification_factors[:, np.newaxis]  # apply amplification factor to each neuron

binary_spike_trains = np.random.randint(0, 2, (10, 10))  # 100 time steps, 20 neurons
amplified_spike_trains = amplify_spike_trains(binary_spike_trains, factor=1)
print("binary", binary_spike_trains[:, :5])
print("amp (not scaled)", amplified_spike_trains[:, :5])
X_min = amplified_spike_trains.min()
X_max = amplified_spike_trains.max()

amplified_spike_trains = (amplified_spike_trains - X_min) / (X_max - X_min)

amplified_spike_trains = np.round(amplified_spike_trains, 2)
print("amp (scaled)", amplified_spike_trains[:, :5])







