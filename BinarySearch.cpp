#include <iostream>
#include <vector>

using namespace std;

int binarySearch(vector<int>& arr, int target) {
    int left = 0;
    int right = arr.size() - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;#include <iostream>
#include <vector>

using namespace std;

// Function to perform binary search on a sorted array
int binarySearch(vector<int>& arr, int target) {
    // Define the initial left and right boundaries of the search
    int left = 0;
    int right = arr.size() - 1;

    // While the search space is not empty
    while (left <= right) {
        // Calculate the middle index of the search space
        int mid = left + (right - left) / 2;

        // If the target is found, return its index
        if (arr[mid] == target) {
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
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

int main() {
    vector<int> arr = {1, 3, 5, 7, 9};
    int target = 7;
    int index = binarySearch(arr, target);
    if (index != -1) {
        cout << "Found " << target << " at index " << index << endl;
    } else {
        cout << "Could not find " << target << endl;
    }
    return 0;
}
