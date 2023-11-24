// Function to perform selection sort on an array
function selectionSort(arr) {
  // Get the length of the array
  const n = arr.length;

  // Loop over each element of the array
  for (let i = 0; i < n - 1; i++) {
    // Assume the current element is the minimum
    let minIndex = i;

    // Find the index of the minimum element in the unsorted part of the array
    for (let j = i + 1; j < n; j++) {
      // If the current element is less than the current minimum, update the minimum
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // If the minimum element is not the current element, swap them
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  // Return the sorted array
  return arr;
}

// Define an unsorted array
const unsortedArray = [64, 25, 12, 22, 11];

// Sort the array using the selection sort algorithm
const sortedArray = selectionSort(unsortedArray);

// Log the sorted array to the console
console.log(sortedArray); // [11, 12, 22, 25, 64]