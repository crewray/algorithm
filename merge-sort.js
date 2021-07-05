function mergeSort(arr) {
    
    var len=arr.length
    if(len<2){
        return arr
    }
    var mid=parseInt(len/2)
    var left=arr.slice(0,mid)
    var right=arr.slice(mid)
    
    return merge(mergeSort(left),mergeSort(right))

}

function merge(left,right){
    var arr=[]
    while(left.length&&right.length){
        if(left[0]<right[0]){
            arr.push(left.shift())
        }else{
            arr.push(right.shift())
        }
    }
    while(left.length){
        arr.push(left.shift())
    }
    while(right.length){
        arr.push(right.shift())
    }

    return arr
    

}

var input='987654321'
var arr=input.split('')

console.log(mergeSort(arr))