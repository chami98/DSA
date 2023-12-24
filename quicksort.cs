// Function to perform Quick Sort on an array
public static void QuickSort(int[] arr, int low, int high)
{
    // Check if low is less than high
    if (low < high)
    {
        // pi is partitioning index, arr[pi] is now at right place
        int pi = Partition(arr, low, high);

        // Recursively sort elements before partition
        QuickSort(arr, low, pi - 1);
        // Recursively sort elements after partition
        QuickSort(arr, pi + 1, high);
    }
}

// Function to partition the array on the basis of pivot
private static int Partition(int[] arr, int low, int high)
{
    // Pivot element is chosen as the last element of the array
    int pivot = arr[high];
    // Index of smaller element
    int i = (low - 1);

    // Iterate over the elements of the array
    for (int j = low; j <= high - 1; j++)
    {
        // If current element is smaller than the pivot
        if (arr[j] < pivot)
        {
            i++;
            // Swap the current element with the element at the next position of smaller element
            Swap(arr, i, j);
        }
    }
    // Swap the pivot element with the element at the next position of smaller element
    Swap(arr, i + 1, high);
    // Return the partitioning index
    return (i + 1);
}

// Function to swap two elements in the array
private static void Swap(int[] arr, int i, int j)
{
    // Temporary variable to hold the value of the first element
    int temp = arr[i];
    // Swap the first element with the second element
    arr[i] = arr[j];
    // Swap the second element with the value of the first element stored in temp
    arr[j] = temp;
}