
//Case 1

const arr = [1,[2,3],[4,5],[6,7],8]
function flatArray(arr, n){
    const ans = [];
    if(n===0) return arr;
    for(let i=0;i< arr.length;i++){
        if(typeof arr[i] === 'number'){
            ans.push(arr[i])
        }else{
            ans.push(...flatArray(arr[i], n-1))
        }
    }
    return ans
}

console.log(flatArray(arr))

// Case 2
const arr1 = [1,[2,3],[4,5],[6,7],8]
const a = arr1.flat(1)
console.log(a)
