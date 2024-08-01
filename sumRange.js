function sumRange(num){
    if(num ==0 || num ==1){
        return 1;
    }else{
        return num + sumRange(num-1)
    }
}

console.log(sumRange(3))