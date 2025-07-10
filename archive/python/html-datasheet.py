import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
import base64
from io import BytesIO
import os

# === Create Dummy Data ===
np.random.seed(0)
x = np.linspace(0, 10, 100)
y1 = np.sin(x) + np.random.normal(0, 0.1, 100)
y2 = np.cos(x) + np.random.normal(0, 0.1, 100)

# === Create Plots ===
def plot_to_base64(fig):
    buf = BytesIO()
    fig.savefig(buf, format='png', bbox_inches='tight')
    plt.close(fig)
    buf.seek(0)
    return base64.b64encode(buf.read()).decode('utf-8')

fig1 = plt.figure()
plt.plot(x, y1, label='Signal A')
plt.title("Graph 1: Signal A")
plt.xlabel("Time")
plt.ylabel("Amplitude")
plt.grid(True)
img1 = plot_to_base64(fig1)

fig2 = plt.figure()
plt.plot(x, y2, label='Signal B', color='orange')
plt.title("Graph 2: Signal B")
plt.xlabel("Time")
plt.ylabel("Amplitude")
plt.grid(True)
img2 = plot_to_base64(fig2)

# === Sample Table Data ===
df = pd.DataFrame({
    "ID": range(1, 6),
    "Name": [f"Item {i}" for i in range(1, 6)],
    "Score": np.random.uniform(50, 100, 5).round(2)
})

table_html = df.to_html(index=False, classes="data-table", border=0)

# === Descriptive Stats ===
desc_stats = {
    "Samples": 100,
    "Mean A": round(np.mean(y1), 2),
    "Mean B": round(np.mean(y2), 2),
    "Std A": round(np.std(y1), 2),
    "Std B": round(np.std(y2), 2)
}

# === HTML Template ===
html = f"""
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Rich Datasheet</title>
    <style>
        body {{ font-family: Arial, sans-serif; margin: 40px; }}
        h1 {{ color: #333; }}
        .stats, .table, .plots {{ margin-bottom: 40px; }}
        .data-table {{ border-collapse: collapse; width: 50%; }}
        .data-table th, .data-table td {{ border: 1px solid #ddd; padding: 8px; text-align: center; }}
        .data-table th {{ background-color: #f2f2f2; }}
        .plot-img {{ max-width: 600px; height: auto; margin-right: 40px; }}
        .plot-container {{ display: flex; flex-wrap: wrap; gap: 20px; }}
    </style>
</head>
<body>
    <h1>Rich Datasheet Report</h1>

    <div class="stats">
        <h2>Descriptive Stats</h2>
        <ul>aimport pandas as pd

# Create a sample DataFrame
data = {'Name': ['Alice', 'Bob', 'Charlie'],
        'Age': [25, 30, 35],
        'City': ['New York', 'London', 'Paris']}
df = pd.DataFrame(data)

# Iterate over rows using iterrows()
for index, row in df.iterrows():
    print(f"Index: {index}, Name: {row['Name']}, Age: {row['Age']}, City: {row['City']}")
            {"".join(f"<li><strong>{k}:</strong> {v}</li>" for k, v in desc_stats.items())}
        </ul>
    </div>

    <div class="plots">
        <h2>Graphs</h2>
        <div class="plot-container">
            <img src="data:image/png;base64,{img1}" class="plot-img" alt="Plot 1">
            <img src="data:image/png;base64,{img2}" class="plot-img" alt="Plot 2">
        </div>
    </div>

    <div class="table">
        <h2>Top 5 Entries</h2>
        {table_html}
    </div>
</body>
</html>
"""

# === Write to File ===
output_path = "rich_datasheet.html"
with open(output_path, "w") as f:
    f.write(html)

print(f"✅ HTML datasheet saved to: {os.path.abspath(output_path)}")
