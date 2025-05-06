const arr = [1,2,3,4,1,2];

function removeAllDuplicates(array){
    return array.filter((item, index, arr) => 
        arr.indexOf(item) === arr.lastIndexOf(item) 
    )
}

console.log(removeAllDuplicates(arr))