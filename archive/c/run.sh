#!/bin/bash

# Create out directory if it doesn't exist
mkdir -p out

# Check if -c flag is present
if [ "$1" = "-c" ]; then
    echo "Cleaning out directory..."
    rm -rf out/*
    shift # Remove -c from arguments
fi

# Check if a file argument is provided
if [ $# -eq 0 ]; then
    echo "Usage: $0 [-c] filename.c"
    exit 1
fi

file="$1"
if [ -f "$file" ] && [[ "$file" == *.c ]]; then
    # Get filename without extension
    filename="${file%.*}"
    # Compile the C file
    gcc "$file" -o "out/$filename.o"
    # Check if compilation was successful
    if [ $? -eq 0 ]; then
        echo "Compilation successful. Running $filename..."
        "./out/$filename.o"
    else
        echo "Compilation failed for $file"
    fi
else
    echo "Error: '$file' is not a valid C file"
    exit 1
fi