import pandas as pd
from matplotlib.backends.backend_pdf import PdfPages
import matplotlib.pyplot as plt

def dataframe_to_pdf(df, filename="out/output.pdf"):
    fig, ax = plt.subplots(figsize=(len(df.columns) * 2, len(df) * 0.5 + 1))
    ax.axis('off')
    table = ax.table(cellText=df.values, colLabels=df.columns, loc='center')
    table.auto_set_font_size(False)
    table.set_fontsize(10)
    table.scale(1, 1.5)

    with PdfPages(filename) as pdf:
        pdf.savefig(fig, bbox_inches='tight')
        plt.close()

# Example
df = pd.DataFrame({
    "Name": ["Alice", "Bob"],
    "Score": [90, 85]
})
dataframe_to_pdf(df)
