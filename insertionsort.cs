// Define a static method for insertion sort
public static void InsertionSort(int[] arr)
{
    // Iterate over the array starting from the second element
    for (int i = 1; i < arr.Length; i++)
    {
        // Store the current element as key
        int key = arr[i];
        // Initialize j as the previous element index
        int j = i - 1;

        // Move elements of arr[0..i-1] that are greater than key
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > key)
        {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        // Place the key in its correct position
        arr[j + 1] = key;
    }
}

// Define an array to be sorted
int[] arr = { 12, 11, 13, 5, 6 };
// Call the InsertionSort method on the array
InsertionSort(arr);