function inserSort(arr){
    for(var i=1;i<arr.length;i++){
        var j=i-1
        var tmp=arr[i]
        while(tmp<arr[j]&&j>=0){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=tmp
    }
}

var input='493578457489546378564278'
var arr=input.split('')
inserSort(arr)
console.log(arr)