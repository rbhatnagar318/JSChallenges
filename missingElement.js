const arr = [1,4,6,5,3];
const arr1 = [1,4,6,5,3];

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

function findMissingElement(arr1){
    arr1 = arr1.sort((a,b) => a - b)
    
    for(let i=0;i< arr1.length;i++){
        if(arr1[i] !== i+1){
            return i+1;
        }
    }
}

console.log(findMissingElement(arr1))



