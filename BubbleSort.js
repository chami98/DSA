// Function to perform bubble sort on an array
function bubbleSort(arr) {
  // Get the length of the array
  let n = arr.length;

  // Outer loop for all elements
  for (let i = 0; i < n; i++) {
    // Inner loop for i+1th to nth element
    for (let j = 0; j < n - i - 1; j++) {
      // If current element is greater than next
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j+1]
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  // Return the sorted array
  return arr;
}

// Example usage:
// Define an unsorted array
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];

// Sort the array using the bubble sort algorithm
const sortedArray = bubbleSort(unsortedArray);

// Log the sorted array to the console
console.log(sortedArray); // [11, 12, 22, 25, 34, 64, 90]