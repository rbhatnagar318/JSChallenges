const obj = {};
const obj1 = new Object();
const obj2 = Object.create({name: 'ANkit'});
const obj3 = Object.freeze(obj);
const obj4 = Object.seal(obj);
const obj5 = Object.assign({}, obj, obj2, obj3);
const obj6 = Object.defineProperty(obj2, 'name', { writable: false, value: 'Ankit' });

obj6.name = 'Rahul';
obj6
//obj - Key "string" or "Symbol"


//ES6
class Car {
    #privateVal = 4;
    model;
    static numOfTimes= 0; 
    constructor(model) {
        if(typeof model !== 'string') {
            throw new Error("Model should be an string")
        }
        this.model = model;
       ++Car.numOfTimes;
    }

    get model1() {
        return this.#privateVal;
    }

    set model1(s) {
        this.model = s;
    }

    abc() {
        console.log('asdasd')
    }
 }

const car1 = new Car("Car Model");
const asdasd = new Car("Car Model2");
car1.model = "casdasd"
console.log(car1.model1)
console.log(car1);
car1.abc()
console.log(Car.numOfTimes)


class Ford extends Car{
    parts;
    constructor(model,parts){
        super(model)
        this.parts = parts
    }
} 

const car2 = new Ford("Tata", "engine")
car2



//Four things which new keyword do 
//1. create an empty object
//2. assign values to proprty `this`
//3. return obj
//4. link prototype to its parent prototype.

//Constructor
//Whenever we create an instance then constructor 


//Constructor - Two things 
// 1. Assignemnt
// 2. Property Validations

// car1 instanceof Car

//super - calls paretn constructor function

//Static properties and methods, 
// When defining properties and methods using static keyword, those properties and methods will be available on the class but not on the instance of the class i.e object.

class MyMath{

    static property = "sb"

    static random(){
        return true
    }

    static max(){
        return true
    }

}

console.log(MyMath.property)

console.log(MyMath.random())
console.log(MyMath.max())

class JobFinder {

}

// JobFinder.createJob()


function P1(a){
    this.a = a;
}

P1.prototype.abc = function() {}
var p1  =new P1('ssss');

Array.prototype.myMethod = function() {
    console.log('sdsss')
}

console.log([].myMethod())