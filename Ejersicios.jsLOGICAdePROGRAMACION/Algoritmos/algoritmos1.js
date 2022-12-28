
//ON LINEAL ES ESTO VA REVISANDO UNO POR UNO
/*
var array =[1, 5, 7, 9, 17, 56]

function maxArray(array){
    var num_max = array[0];
    var largo = array.length;
    for (var i = 1; i < largo; i++){
        if (array[i] > num_max){
            num_max = array[i];
        }
    }
    return num_max;
}

maxArray(array)
*/

var array = [1, 3, 4, 6, 7, 9]

function sumArray (array, num){
    var largo = array.length
    for (var i = 0;  i < largo; i++){
        for (var j = i+1; j< largo; j++){
            if (array[i]+ array[j] === num)
            return true;
        }

    }
    return false;
}

sumArray(array,6)