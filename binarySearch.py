# This function performs a binary search on a sorted array
def binary_search(arr, target):
    # Define the initial low and high boundaries of the search
    low = 0
    high = len(arr) - 1

    # While the search space is not empty
    while low <= high:
        # Calculate the middle index of the search space
        mid = (low + high) // 2

        # If the target is found, return its index
        if arr[mid] == target:
            return mid
        # If the target is greater than the middle element, discard the left half of the search space
        elif arr[mid] < target:
            low = mid + 1
        # If the target is less than the middle element, discard the right half of the search space
        else:
            high = mid - 1

    # If the target is not found, return -1
    return -1