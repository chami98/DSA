function selectionSort(arr) {
    const n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      // Assume the current element is the minimum
      let minIndex = i;
  
      // Find the index of the minimum element in the unsorted part of the array
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
  
      // Swap the found minimum element with the first element
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
  
    return arr;
  }
  
  const unsortedArray = [64, 25, 12, 22, 11];
  const sortedArray = selectionSort(unsortedArray);
  console.log(sortedArray); // [11, 12, 22, 25, 64]
  