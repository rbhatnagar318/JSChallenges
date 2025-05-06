function mergeTwoSortedArray(arr1, arr2){
    let c = [...arr1, ...arr2]
   return c.sort()
    
}

console.log(mergeTwoSortedArray([2,3,5], [8,7,6]))