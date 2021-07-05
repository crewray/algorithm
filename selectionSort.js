function selectionSort(arr) {

    for (var j = 0; j < arr.length; j++) {
        var min = j
        

        for (var i = j+1; i < arr.length; i++) {
            if (arr[i] < arr[min]) min = i
        }
        var tmp=arr[j]
        arr[j]=arr[min]
        arr[min]=tmp
    }

}

var input='49234893274'
var arr=input.split('')
selectionSort(arr)
console.log(arr)