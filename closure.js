function mainFunc(){
    let obj = {name: 'Rahul', age: 23};

    return function(){
        console.log(obj.name + "is" + "good");
    }
}

const closure = mainFunc();
closure()

// Data Encapsulation and private variable
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

// Event Handler with preserved state

/* <button id="button1"></button>
<button id="button2"></button> */

function greet(name){
    function greetName(){
        console.log(`name is ${name}`)
    }
    return greetName
}

// const button1 =  document.getElementById("button1");
// const button2 =  document.getElementById("button2");

// button1.addEventListener("click", greet("Ankit"))
// button2.addEventListener("click", greet("Rahul"))


// Modules and Function Currying

function createMathModule(){
    const PI = 3.14159;


    function sum(a,b){
        return a+b;
    }

    function subtract(a,b){
        return a-b; 
    }

    function circleArea(radius){
        return function(multiplier = 1){
            return PI * Math.pow(radius,2) * multiplier;
        }
    }
    return {
        sum, 
        subtract,
        circleArea
    }
}

const a = createMathModule();
console.log(a.sum(2, 3));
console.log(a.subtract(2, 3));
const b = a.circleArea(5)
console.log(b())
console.log(b(2));
