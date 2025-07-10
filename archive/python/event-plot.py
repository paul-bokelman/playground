import matplotlib.pyplot as plt
import numpy as np

plasma = plt.colormaps['plasma']  # Use the 'plasma' colormap

plt.style.use('dark_background')

# Example: 15 neurons, 100 time points, values between 0 and 1
data = np.random.uniform(0, 1, (15, 100))

fig, ax = plt.subplots(figsize=(15, 6))

for neuron_idx in range(data.shape[0]):
    # Get non-zero spike times
    times = np.where(data[neuron_idx] > 0)[0]
    magnitudes = data[neuron_idx, times]

    # Normalize magnitudes to [0, 1]
    if len(magnitudes) > 0:
        ptp_val = np.ptp(magnitudes)
        normed = (magnitudes - magnitudes.min()) / (ptp_val if ptp_val > 0 else 1)
        # Use plasma colormap, set alpha proportional to normalized magnitude
        rgba_colors = [plasma(val, alpha=val) for val in normed]
    else:
        rgba_colors = []

    # Plot spikes for this neuron
    ax.eventplot(
        positions=[times],
        lineoffsets=neuron_idx,
        colors=[rgba_colors],
        linelengths=0.8
    )

ax.set_xlabel("Time (samples)")
ax.set_ylabel("Neurons")
ax.set_title("Spike Trains with Opacity and Color (plasma) Based on Magnitude")
plt.colorbar(
    plt.cm.ScalarMappable(cmap=plasma), ax=ax, label='Normalized Magnitude'
)
plt.show()