function mulCurrying(a){
    return function(b){
        return function(c){
            return a*b*c;
        }
    } 
}

console.log(mulCurrying(2)(3)(4))