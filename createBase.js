function createBase(baseNumber){
    return function(N){
        return baseNumber + N
    }
}

var addSix = createBase(6)
console.log(addSix(10))
console.log(addSix(21))