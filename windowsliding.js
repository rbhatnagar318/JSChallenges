function maxWindowSlidingSum(arr,k){
    if(arr.length < k) return -1;
    let maxSum = 0;
    let currentSum = 0;
    for(let i=0;i< k;i++){
        currentSum += arr[i];
    }
    maxSum = currentSum;

    for(let i=k;i< arr.length;i++){
        currentSum = currentSum - arr[i-k] + arr[i];
        maxSum = currentSum;
    }
    return maxSum;
}

console.log(maxWindowSlidingSum([10,20,30,40,50,60], 3))