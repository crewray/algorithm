var array = [5, 6, 2, 8, 32, 3]

var input = '438578349578349'
var arr1 = input.split('')

function maopao(arr) {
    for (var i = arr.length - 1; i > 1; i--) {
        for (var j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                var tmp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = tmp
            }
        }
    }
    return arr
}



console.log(maopao(arr1))