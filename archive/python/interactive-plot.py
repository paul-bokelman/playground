import tkinter as tk
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg
import matplotlib.pyplot as plt
import numpy as np

class InteractivePlot:
    def __init__(self, master):
        self.master = master
        self.master.title("Interactive Plot with Vertical Line")

        # Sample data
        x = np.linspace(0, 10, 100)
        y = np.sin(x)

        # Create a Matplotlib figure
        self.fig, self.ax = plt.subplots()
        self.ax.plot(x, y)
        self.ax.set_title("Click to place a vertical line")

        # List to store x-coordinates of lines
        self.vertical_lines = []

        # Embed the figure in Tkinter
        self.canvas = FigureCanvasTkAgg(self.fig, master=self.master)
        self.canvas.draw()
        self.canvas.get_tk_widget().pack(fill=tk.BOTH, expand=True)

        # Connect the event
        self.cid = self.canvas.mpl_connect("button_press_event", self.onclick)

    def onclick(self, event):
        # Only respond to clicks inside the axes
        if event.inaxes != self.ax:
            return

        # Draw vertical line
        x = event.xdata
        self.ax.axvline(x=x, color='red', linestyle='--')
        self.vertical_lines.append(x)
        self.canvas.draw()

        # Print or process the x-coordinate
        print(f"Clicked at x = {x:.2f}")

if __name__ == "__main__":
    root = tk.Tk()
    app = InteractivePlot(root)
    root.mainloop()
