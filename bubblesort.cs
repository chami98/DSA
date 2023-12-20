// Define a static method for bubble sort
public static void BubbleSort(int[] arr)
{
    // Get the length of the array
    int n = arr.Length;

    // Outer loop iterates over each element
    for (int i = 0; i < n - 1; i++)
    {
        // Inner loop for comparing adjacent elements
        for (int j = 0; j < n - i - 1; j++)
        {
            // If current element is greater than the next
            if (arr[j] > arr[j + 1])
            {
                // Swap arr[j] and arr[j+1]
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

// Define an array to be sorted
int[] arr = { 64, 34, 25, 12, 22, 11, 90 };

// Call the BubbleSort method on the array
BubbleSort(arr);