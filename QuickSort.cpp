#include <iostream>
#include <vector>

using namespace std;

// Function to partition the array on the basis of pivot
int partition(vector<int> &arr, int low, int high)
{
    // Pivot element is chosen as the last element of the array
    int pivot = arr[high];
    // Index of smaller element
    int i = low - 1;
    // Iterate over the elements of the array
    for (int j = low; j < high; j++)
    {
        // If current element is smaller than the pivot
        if (arr[j] < pivot)
        {
            i++;
            // Swap the current element with the element at the next position of smaller element
            swap(arr[i], arr[j]);
        }
    }
    // Swap the pivot element with the element at the next position of smaller element
    swap(arr[i + 1], arr[high]);
    // Return the partitioning index
    return i + 1;
}

// Function to perform Quick Sort on array
void quickSort(vector<int> &arr, int low, int high)
{
    // Check if low is less than high
    if (low < high)
    {
        // pi is partitioning index, arr[pi] is now at right place
        int pi = partition(arr, low, high);
        // Recursively sort elements before and after partition
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

int main()
{
    // Define an array to be sorted
    vector<int> arr = {10, 7, 8, 9, 1, 5};
    int n = arr.size();
    // Call the quickSort function on the array
    quickSort(arr, 0, n - 1);
    // Print the sorted array
    cout << "Sorted array: ";
    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;
    return 0;
}