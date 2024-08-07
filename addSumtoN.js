function addSumtoN(num){
    if(num===0 || num===1){
        return 1
    }else{
        return num + addSumtoN(num-1)
    }
}

console.log(addSumtoN(6))
