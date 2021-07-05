function quickSort(arr, left, right) {

    if (left < right) {
        var pivot = partition(arr, left, right)
        quickSort(arr, left, pivot - 1)
        quickSort(arr, pivot + 1, right)
    }



}

function partition(arr, left, right) {


    var pivot = arr[left]



    while (left < right) {

        while (arr[right] >= pivot && left < right) {
            right--

        }
        arr[left] = arr[right]

        while (arr[left] <= pivot && left < right) {
            left++
        }
        arr[right] = arr[left]



    }
    arr[left] = pivot
    return left
}

var arr = [9, 8, 7, 6, 5, 4, 3, 2, 1]
quickSort(arr, 0, arr.length - 1)
console.log(arr)