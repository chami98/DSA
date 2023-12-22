// Function to perform Merge Sort on an array
public static void MergeSort(int[] arr, int left, int right)
{
    // Check if the left index is less than the right index
    if (left < right)
    {
        // Calculate the middle index
        int mid = left + (right - left) / 2;

        // Recursively sort the first half of the array
        MergeSort(arr, left, mid);
        // Recursively sort the second half of the array
        MergeSort(arr, mid + 1, right);

        // Merge the two halves
        Merge(arr, left, mid, right);
    }
}

// Function to merge two subarrays into a single sorted array
private static void Merge(int[] arr, int left, int mid, int right)
{
    // Create temporary arrays for the left and right subarrays
    int[] leftArray = new int[mid - left + 1];
    int[] rightArray = new int[right - mid];

    // Copy data to the temporary arrays
    Array.Copy(arr, left, leftArray, 0, mid - left + 1);
    Array.Copy(arr, mid + 1, rightArray, 0, right - mid);

    // Merge the temporary arrays back into the original array
    int i = 0;
    int j = 0;
    int k = left;

    // While there are elements in both subarrays
    while (i < leftArray.Length && j < rightArray.Length)
    {
        // If the current element of the left subarray is less than or equal to the current element of the right subarray
        if (leftArray[i] <= rightArray[j])
        {
            // Copy the element from the left subarray to the original array
            arr[k] = leftArray[i];
            i++;
        }
        else
        {
            // Copy the element from the right subarray to the original array
            arr[k] = rightArray[j];
            j++;
        }
        k++;
    }

    // Copy the remaining elements of the left subarray, if there are any
    while (i < leftArray.Length)
    {
        arr[k] = leftArray[i];
        i++;
        k++;
    }

    // Copy the remaining elements of the right subarray, if there are any
    while (j < rightArray.Length)
    {
        arr[k] = rightArray[j];
        j++;
        k++;
    }
}

// Define an array to be sorted
int[] arr = { 12, 11, 13, 5, 6 };
// Call the MergeSort function on the array
MergeSort(arr, 0, arr.Length - 1);