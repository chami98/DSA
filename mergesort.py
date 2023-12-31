def merge_sort(arr):
    # If the array has 1 or 0 elements, it's already sorted
    if len(arr) <= 1:
        return arr

    # Find the middle of the array
    mid = len(arr) // 2

    # Split the array into two halves
    left_half = arr[:mid]
    right_half = arr[mid:]

    # Recursively sort both halves and merge them
    return merge(merge_sort(left_half), merge_sort(right_half))

def merge(left, right):
    merged = []
    left_index = 0
    right_index = 0

    while left_index < len(left) and right_index < len(right):
        if left[left_index] <= right[right_index]:
            merged.append(left[left_index])
            left_index += 1
        else:
            merged.append(right[right_index])
            right_index += 1

    merged.extend(left[left_index:])
    merged.extend(right[right_index:])
    return merged

# Test array
arr = [38, 27, 43, 3, 9, 82, 10]

print("Given array is", arr)
arr = merge_sort(arr)
print("Sorted array is", arr)