function mainFunc(){
    let obj = {name: 'Rahul', age: 23};

    return function(){
        console.log(obj.name + "is" + "good");
    }
}

const closure = mainFunc();
closure()