function removeDuplicates(arr){
    return arr.filter((item,index) => arr.indexOf(item) !== index)
}

console.log(removeDuplicates([1,2,3,1,46,7,6,4]))