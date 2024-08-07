const arr = [1,2,3,5,6];

function missingElement(arr){
    const n = arr.length + 1;
    const sumOfN = (n* (n+1))/2

    let sumofArray = 0;
    for(let i=0;i< n-1;i++){
        sumofArray = sumofArray + arr[i]
    }
    let missingNumner = sumOfN - sumofArray
    return missingNumner;
}

console.log(missingElement(arr))
