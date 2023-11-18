function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        const pivotIndex = partition(arr, low, high);
        quickSort(arr, low, pivotIndex);
        quickSort(arr, pivotIndex + 1, high);
    }
    return arr;
}

function partition(arr, low, high) {
    const pivot = arr[Math.floor((low + high) / 2)];
    let i = low - 1;
    let j = high + 1;
    while (true) {
        do {
            i++;
        } while (arr[i] < pivot);
        do {
            j--;
        } while (arr[j] > pivot);
        if (i >= j) {
            return j;
        }
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

const arr = [5, 3, 7, 1, 9, 8, 6, 2, 4];
console.log(quickSort(arr)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]