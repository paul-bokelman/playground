import argparse

supported_modes = ['train', 'test', 'predict']

parser = argparse.ArgumentParser("simple_example")
parser.add_argument("-m", '--mode', help="The mode to run the process", default='test', type=str)
args = parser.parse_args()

if args.mode not in supported_modes:
    raise ValueError(f"Mode {args.mode} is not supported. Supported modes are {supported_modes}")

print(f"Running in mode '{args.mode}'")