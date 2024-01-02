public class SelectionSort
{
    // Function to perform Selection Sort on an array
    public static void Sort(int[] arr)
    {
        // Get the length of the array
        int n = arr.Length;

        // One by one move boundary of unsorted subarray
        for (int i = 0; i < n - 1; i++)
        {
            // Find the minimum element in unsorted array
            // Assume the first element is the minimum
            int minIndex = i;

            // Iterate over the elements of the unsorted array
            for (int j = i + 1; j < n; j++)
            {
                // If a smaller element is found, update minimum index
                if (arr[j] < arr[minIndex])
                {
                    minIndex = j;
                }
            }

            // Swap the found minimum element with the first element of the unsorted array
            int temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }
}