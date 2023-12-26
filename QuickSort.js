// Function to perform Quick Sort on an array
function quickSort(arr, low = 0, high = arr.length - 1) {
    // Check if low is less than high
    if (low < high) {
        // Get pivot index from partition
        const pivotIndex = partition(arr, low, high);
        // Recursively sort elements before partition and after partition
        quickSort(arr, low, pivotIndex);
        quickSort(arr, pivotIndex + 1, high);
    }
    // Return the sorted array
    return arr;
}

// Function to partition the array on the basis of pivot
function partition(arr, low, high) {
    // Pivot element is chosen as the middle element of the array
    const pivot = arr[Math.floor((low + high) / 2)];
    // Index of smaller element and indicates the right position of pivot found so far
    let i = low - 1;
    // Index of larger element and indicates the right position of pivot found so far
    let j = high + 1;
    // Infinite loop to move elements greater than pivot to the right and smaller elements to the left
    while (true) {
        do {
            i++;
        } while (arr[i] < pivot);
        do {
            j--;
        } while (arr[j] > pivot);
        // If two pointers met, then break
        if (i >= j) {
            return j;
        }
        // Swap elements at i and j
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

// Define an array to be sorted
const arr = [5, 3, 7, 1, 9, 8, 6, 2, 4];
// Call the quickSort function on the array and print the sorted array
console.log(quickSort(arr)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]