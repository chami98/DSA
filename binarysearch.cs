public static int BinarySearch(int[] arr, int target)
{
    // Define the initial left and right boundaries of the search
    int left = 0;
    int right = arr.Length - 1;

    // While the search space is not empty
    while (left <= right)
    {
        // Calculate the middle index of the search space
        int mid = left + (right - left) / 2;

        // If the target is found, return its index
        if (arr[mid] == target)
        {
            return mid;
        }

        // If the target is greater than the middle element, discard the left half of the search space
        if (arr[mid] < target)
        {
            left = mid + 1;
        }
        // If the target is less than the middle element, discard the right half of the search space
        else
        {
            right = mid - 1;
        }
    }

    // If the target is not found, return -1
    return -1; 
}