def chunk_sort(arr):
    if len(arr) == 1 or len(arr) == 0:
        return arr
    
    sorted = []
    chunk_sizes = []
    prev = arr[0]
    chunk_size = 1

    for i in range(1, len(arr)):
        # larger than chunk tail -> increase chunk and continue
        if arr[i] > prev:
            chunk_size += 1
            continue
        # lower than chunk tail -> iterate and attach to prev chunk
        else:
            chunk_sizes[-1] = chunk_size # record prev chunk size
            chunk_size = 1

    return sorted

sorted = chunk_sort([31,41,59,26,41,58])

print(sorted) # [26,31,41,41,58,59]