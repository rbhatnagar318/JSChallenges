function createBase(baseNumber){
    return function(N){
        return baseNumber + N
    }
}

var addSix = createBase(6)
console.log(addSix(10))
console.log(addSix(21))



// class Bank{
// balance
// accountNumber
// accounrHolderName
// // balance = 0;

// withdrwal(){
    
// }

// deposit(){

// }

// }