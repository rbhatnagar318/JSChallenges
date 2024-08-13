function addSumtoN(num){
    if(num===0 || num===1){
        return 1
    }else{
        return num + addSumtoN(num-1)
    }
}

console.log(addSumtoN(6))

function factorial(num){
    if(num === 0 || num === 1){
        return 1
    }else{
        let ans = 1;
        for(let i=2;i<= num;i++){
            ans = ans + i;
        }
        return ans
    }
}

console.log(factorial(5))
