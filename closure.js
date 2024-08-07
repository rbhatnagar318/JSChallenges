function mainFunc(){
    let obj = {name: 'Rahul', age: 23};

    return function(){
        console.log(obj.name + "is" + "good");
    }
}

const closure = mainFunc();
closure()


function count(){
    let count=0;
    return function(){
       return count++;
    }
}

var countClosure = count()

console.log(countClosure())
console.log(countClosure())
console.log(countClosure())