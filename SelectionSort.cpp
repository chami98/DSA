#include <iostream>
using namespace std;

// Function to perform Selection Sort on an array
void selectionSort(int arr[], int n)
{
    int i, j, min_idx;

    // One by one move boundary of unsorted subarray
    for (i = 0; i < n - 1; i++)
    {
        // Find the minimum element in unsorted array
        // Assume the first element is the minimum
        min_idx = i;
        for (j = i + 1; j < n; j++)
            // If a smaller element is found, update minimum index
            if (arr[j] < arr[min_idx])
                min_idx = j;

        // Swap the found minimum element with the first element of the unsorted array
        swap(arr[min_idx], arr[i]);
    }
}

int main()
{
    // Define an array to be sorted
    int arr[] = {64, 25, 12, 22, 11};
    int n = sizeof(arr) / sizeof(arr[0]);
    // Call the selectionSort function on the array
    selectionSort(arr, n);
    // Print the sorted array
    cout << "Sorted array: \n";
    for (int i = 0; i < n; i++)
        cout << arr[i] << " ";
    return 0;
}