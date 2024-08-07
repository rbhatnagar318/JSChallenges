function collectOddValues(arr){
    const ans = [];
    for(let i=0;i< arr.length;i++){
        if( arr[i] % 2 !== 0 ){
            ans.push(arr[i]);
        }
    }
    return ans
}

console.log(collectOddValues([1,2,3,4,5,6,7,8,9]))

//Case 2

function oddValues(arr){
    return arr.filter((item) => item %2 !==0)
}

console.log(oddValues([1,2,3,4,5,6,7,8,9]))

//Case 3 
 

let numbers = [1,2,3,4,5,6,7,8,9];

function recursive(arr, index = 0){
    if(index >= arr.length) return;
    if(arr[index] % 2 !==0){
        console.log(arr[i])
    }
    recursive(arr, index+1)
}

console.log(recursive(arr))

