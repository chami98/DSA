public static void MergeSort(int[] arr, int left, int right)
{
    if (left < right)
    {
        int mid = left + (right - left) / 2;

        MergeSort(arr, left, mid);
        MergeSort(arr, mid + 1, right);

        Merge(arr, left, mid, right);
    }
}

private static void Merge(int[] arr, int left, int mid, int right)
{
    int[] leftArray = new int[mid - left + 1];
    int[] rightArray = new int[right - mid];

    Array.Copy(arr, left, leftArray, 0, mid - left + 1);
    Array.Copy(arr, mid + 1, rightArray, 0, right - mid);

    int i = 0;
    int j = 0;
    int k = left;

    while (i < leftArray.Length && j < rightArray.Length)
    {
        if (leftArray[i] <= rightArray[j])
        {
            arr[k] = leftArray[i];
            i++;
        }
        else
        {
            arr[k] = rightArray[j];
            j++;
        }
        k++;
    }

    while (i < leftArray.Length)
    {
        arr[k] = leftArray[i];
        i++;
        k++;
    }

    while (j < rightArray.Length)
    {
        arr[k] = rightArray[j];
        j++;
        k++;
    }
}

int[] arr = {12, 11, 13, 5, 6};
MergeSort(arr, 0, arr.Length - 1);