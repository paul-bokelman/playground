import time
from datetime import datetime

def task():
    print("Task is running")

available_hours = [18, 0, 1, 2]

while True:
    if datetime.now().time().hour in available_hours:
        task()
    time.sleep(1)