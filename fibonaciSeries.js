// const prompt = require("prompt-sync")()

// let number = parseInt(prompt("Enter a value"));
// let n1=0,n2=1,nextTerm;
// nextTerm = n1+n2;
// while(nextTerm <= number){
//     console.log(nextTerm)
//     n1 = n2;
//     n2 = nextTerm;
//     nextTerm = n1+n2;
// }


function fibonaci(num){
    let num1 = 0;
    let num2 = 1;
    let nextTerm;
    if(num === 1){
        return num1
    }else if(num === 2){
        return num2
    }else{
    for(let i=3;i<= num;i++){
        nextTerm = num1 + num2;
        num1 = num2;
        num2 = nextTerm
    }
     return num2
    }
   
}

console.log(fibonaci(8))























function fibonaci(num){
    let num1= 0;
    let num2 = 1;
    let nextTerm;
    if(num ===1){
        return num1
    }
    else if(num ===2){
        return num2
    }
    for(let i=0;i<= num;i++){
    nextTerm = num1 + num2;
    num1 = num2;
    num2 = nextTerm;
    }
    return num2
}

console.log(fibonaci(8))


