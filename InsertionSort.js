// Define a function for insertion sort
function insertionSort(arr) {
  // Iterate over the array starting from the second element
  for (let i = 1; i < arr.length; i++) {
    // Store the current element as key
    let key = arr[i];
    // Initialize j as the previous element index
    let j = i - 1;

    // Move elements of arr[0..i-1] that are greater than key
    // to one position ahead of their current position
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    // Place the key in its correct position
    arr[j + 1] = key;
  }
  // Return the sorted array
  return arr;
}

// Define an unsorted array
const unsortedArray = [64, 25, 12, 22, 11];

// Call the insertionSort function on the unsorted array
const sortedArray = insertionSort(unsortedArray);

// Print the sorted array
console.log(sortedArray); // [11, 12, 22, 25, 64]