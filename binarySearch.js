// This function performs a binary search on a sorted array
function binarySearch(arr, target) {
    // Define the initial left and right boundaries of the search
    let left = 0;
    let right = arr.length - 1;

    // While the search space is not empty
    while (left <= right) {
        // Calculate the middle index of the search space
        let mid = Math.floor((left + right) / 2);

        // If the target is found, return its index
        if (arr[mid] === target) {
            return mid;
        } 
        // If the target is greater than the middle element, discard the left half of the search space
        else if (arr[mid] < target) {
            left = mid + 1;
        } 
        // If the target is less than the middle element, discard the right half of the search space
        else {
            right = mid - 1;
        }
    }

    // If the target is not found, return -1
    return -1;
}