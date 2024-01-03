# This function performs a selection sort on an array
def selection_sort(arr):
    # Get the length of the array
    n = len(arr)

    # Iterate over each element in the array
    for i in range(n):
        # Assume the current element is the smallest
        min_idx = i

        # Iterate over the rest of the array
        for j in range(i+1, n):
            # If a smaller element is found, update the minimum index
            if arr[j] < arr[min_idx]:
                min_idx = j

        # Swap the current element with the smallest element found
        arr[i], arr[min_idx] = arr[min_idx], arr[i]

    # Return the sorted array
    return arr
