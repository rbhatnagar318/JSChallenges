const throttle = (mainFunc, delay) => {
    let timer;
    return function(...args){
        if(!timer){
            mainFunc(...args)
            timer = setTimeout(() => {
                timer = null;
            },delay)
        }
    }
}

function fun(){
    console.log("Function is calling")
}

const throttlefunction =  throttle(fun, 4000)
throttlefunction()