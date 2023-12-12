# This function performs a binary search on a sorted array.
def binary_search(arr, low, high, x):
    # If the high index is greater or equal to the low index, continue the search.
    if high >= low:
        # Calculate the middle index.
        mid = (high + low) // 2
        # If the middle element is the target, return its index.
        if arr[mid] == x:
            return mid
        # If the middle element is greater than the target, search in the left half.
        elif arr[mid] > x:
            return binary_search(arr, low, mid - 1, x)
        # If the middle element is less than the target, search in the right half.
        else:
            return binary_search(arr, mid + 1, high, x)
    # If the high index is less than the low index, the target is not in the array.
    else:
        return -1

# Define a test array.
arr = [2, 3, 4, 10, 40]
# Define the target element.
x = 10

# Call the binary search function with the test array and target element.
result = binary_search(arr, 0, len(arr)-1, x)

# If the result is not -1, the target is in the array.
if result != -1:
    print("Element is present at index", str(result))
# If the result is -1, the target is not in the array.
else:
    print("Element is not present in array")