# Define a function for bubble sort
def bubble_sort(arr):
    # Get the length of the array
    n = len(arr)

    # Outer loop iterates over each element
    for i in range(n):
        # Inner loop for comparing adjacent elements
        for j in range(0, n - i - 1):
            # If current element is greater than the next
            if arr[j] > arr[j + 1]:
                # Swap arr[j] and arr[j+1]
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

# Define a test array
arr = [64, 34, 25, 12, 22, 11, 90]

# Print the unsorted array
print("Unsorted array is:", arr)

# Call the bubble_sort function on the array
bubble_sort(arr)

# Print the sorted array
print("Sorted array is:", arr)