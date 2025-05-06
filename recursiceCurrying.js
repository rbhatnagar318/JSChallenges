function sum(...args){
    console.log("c",...args)
    function accumulate(...newArgs){
        console.log("ab",...newArgs)
        if(newArgs.length === 0){
           return args.reduce((acc, num) => acc + num, 0);
        }
        args.push(...newArgs);
        return accumulate;
    }
    return accumulate;
}


const result = sum(1)(2)(3)(4,5);
console.log(result())