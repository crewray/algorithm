function shellSort(arr){
    var gap= parseInt(arr.length/2)
    while(gap>0){

        for(var i=gap;i<arr.length;i++){
            var tmp=arr[i]
            for(var j=i-gap;j>=0&&tmp<arr[j];j-=gap){
                arr[j+gap]=arr[j]
            }
            arr[j+gap]=tmp
        }

        gap=parseInt(gap/2)
    }
}




var input='29857832967322525436'
var arr=input.split('')
shellSort(arr)
console.log(arr)