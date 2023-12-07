#include <iostream>
using namespace std;

// Function to perform Bubble Sort on an array
void bubbleSort(int arr[], int n) {
    // Outer loop for 'n' number of passes
    for (int i = 0; i < n - 1; i++) {
        // Inner loop for each pass
        for (int j = 0; j < n - i - 1; j++) {
            // If current element is greater than the next
            if (arr[j] > arr[j + 1]) {
                // Swap the elements
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

int main() {
    // Define an array to be sorted
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    // Calculate the number of elements in the array
    int n = sizeof(arr) / sizeof(arr[0]);
    // Perform bubble sort on the array
    bubbleSort(arr, n);
    // Print the sorted array
    cout << "Sorted array: ";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    return 0;
}