function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1];
    const leftArr = [];
    const rightArr = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

const arr = [5, 3, 7, 1, 9, 8, 6, 2, 4];
console.log(quickSort(arr)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
