function collectOddValues(arr){
    // return arr.filter((item) => item %2!==0)
    const a = [];
    for(let i=0;i< arr.length;i++){
        if(arr[i] %2!==0){
            a.push(arr[i])
        }
    }
    return a;
}
console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));