function quickSort(arr){
    if(arr.length===0){
        return arr
    }

    return [...quickSort(arr.filter(i=>i<arr[0])),...arr.filter(i=>i===arr[0]),...quickSort(arr.filter(i=>i>arr[0]))]

}

console.log(quickSort([9,8,7,6,5,4,3,2,1]))