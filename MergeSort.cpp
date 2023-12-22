#include <iostream>
#include <vector>

using namespace std;

// Function to merge two subarrays into a single sorted array
void merge(vector<int> &arr, int left, int mid, int right)
{
    // Calculate the sizes of the two subarrays
    int n1 = mid - left + 1;
    int n2 = right - mid;

    // Create temporary arrays for the subarrays
    vector<int> L(n1), R(n2);

    // Copy data to temporary arrays
    for (int i = 0; i < n1; i++)
    {
        L[i] = arr[left + i];
    }
    for (int j = 0; j < n2; j++)
    {
        R[j] = arr[mid + 1 + j];
    }

    // Merge the temporary arrays back into the original array
    int i = 0, j = 0, k = left;
    while (i < n1 && j < n2)
    {
        if (L[i] <= R[j])
        {
            arr[k] = L[i];
            i++;
        }
        else
        {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    // Copy the remaining elements of L[], if there are any
    while (i < n1)
    {
        arr[k] = L[i];
        i++;
        k++;
    }

    // Copy the remaining elements of R[], if there are any
    while (j < n2)
    {
        arr[k] = R[j];
        j++;
        k++;
    }
}

// Function to sort an array using the merge sort algorithm
void mergeSort(vector<int> &arr, int left, int right)
{
    if (left < right)
    {
        // Find the middle point to divide the array into two halves
        int mid = left + (right - left) / 2;

        // Call mergeSort for first half
        mergeSort(arr, left, mid);
        // Call mergeSort for second half
        mergeSort(arr, mid + 1, right);

        // Merge the two halves sorted
        merge(arr, left, mid, right);
    }
}

int main()
{
    // Define an array to be sorted
    vector<int> arr = {12, 11, 13, 5, 6, 7};
    int n = arr.size();

    // Print the unsorted array
    cout << "Given array is \n";
    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;

    // Call the mergeSort function on the array
    mergeSort(arr, 0, n - 1);

    // Print the sorted array
    cout << "\nSorted array is \n";
    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;

    return 0;
}