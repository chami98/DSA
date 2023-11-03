function insertionSort(arr) {
    const n = arr.length;
  
    for (let i = 1; i < n; i++) {
      // Store the current element to be inserted
      let currentElement = arr[i];
      let j = i - 1;
  
      // Compare the current element with the elements in the sorted part of the array
      while (j >= 0 && arr[j] > currentElement) {
        // Shift elements to the right to make space for the current element
        arr[j + 1] = arr[j];
        j--;
      }
  
      // Insert the current element into its correct position
      arr[j + 1] = currentElement;
    }
  
    return arr;
  }
  
  // Example usage:
  const unsortedArray = [64, 25, 12, 22, 11];
  const sortedArray = insertionSort(unsortedArray);
  console.log(sortedArray); // [11, 12, 22, 25, 64]
  