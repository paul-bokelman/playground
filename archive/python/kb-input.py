import sys
import termios
import tty
import time
import select

def get_keypress():
    # Get the terminal settings
    fd = sys.stdin.fileno()
    old_settings = termios.tcgetattr(fd)
    try:
        tty.setraw(sys.stdin.fileno())
        ch = sys.stdin.read(1)
    finally:
        termios.tcsetattr(fd, termios.TCSADRAIN, old_settings)
    return ch

print("Press any key to continue or 'q' to quit.")
def check_input():
    if sys.stdin in select.select([sys.stdin], [], [], 0)[0]:
        key = get_keypress()
        print(f"You pressed: {key}")
        if key == 'q':
            print("Exiting...")
            return False
    return True

def main():
    while True:
        print("ello")
        if not check_input():
            break
        time.sleep(0.1)  # Small delay to prevent CPU overuse

if __name__ == "__main__":
    main()