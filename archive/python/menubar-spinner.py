# swiftbar must be running to see the loading icon

import time

spinner_file = "/tmp/menu_spinner.txt"

def show_menu_spinner():
    with open(spinner_file, "w") as f:
        f.write("true")

def hide_menu_spinner():
    with open(spinner_file, "w") as f:
        f.write("false")


show_menu_spinner()
time.sleep(3)
hide_menu_spinner()