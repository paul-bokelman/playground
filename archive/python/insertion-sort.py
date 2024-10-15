def insertion_sort(arr: list[int]): 
    for i in range(1, len(arr)):
        key = arr[i] # current element value
        j = i - 1 # index of element behind current

        # continually shift elements as long as previous is larger than current
        while j >= 0 and arr[j] > key:
            arr[j+1] = arr[j] # shift elements right
            j = j - 1 # move to the element to the left
            

        arr[j+1] = key # place element

def recursive_insertion_sort(arr: list[int], n: int):
    # list of 1 element is sorted (base case)
    if n <= 1:
        return
    
    recursive_insertion_sort(arr, n-1)
    
    key = arr[n-1] # current element value
    j = n - 2 # index of element behind current

    # continually shift elements as long as previous is larger than current
    while j >= 0 and arr[j] > key:
        arr[j+1] = arr[j] # shift elements right
        j = j - 1 # move to the element to the left

    arr[j+1] = key # place element


arr1 = [12, 11, 13, 5, 6]
insertion_sort(arr1)
print(arr1)

arr2 = [12, 11, 13, 5, 6]
recursive_insertion_sort(arr2, len(arr2))
print(arr2)