// var obj = {
//     name:'Rahul',
//     getName: function(){
//         return `${this.name} is great`
//     }
// }

// console.log(obj.getName());

// function sayHello(){
//     return "" + this.name;
// }

// var obj1 = {name: "Rahul"};

// console.log(sayHello.call(obj1))

// function saySomething(message){
//     return this.name + " is " + message;
// }

// var obj2  = {name: 'Rahul'};

// console.log(saySomething.apply(obj2,["Awesome"]));

// function bikeDetails(registrationname, brandName){
//     return this.name + "," + registrationname + brandName;
// }

// var obj3 = {name: "Rahul"};

// var a = bikeDetails.bind(obj3, '787908', 'Audi');
// console.log(a());



var obj = {
    name: "Rahul",
    getName: function(){
        return `${this.name} is bad`
    }
}

console.log(obj.getName())

function myFunc(){
    return `${this.name} is cool`;
}

var obj = {name: "Rahul"}

console.log(myFunc.call(obj))

function myFunc1(message){
    return `${this.name} is a nice ${message}`;
}

var obj = {name: "Rahul"};

console.log(myFunc1.apply(obj,["man"]));


function myFunc2(bikeDetails, registration){
    return `My name is ${this.name}. This is going to be ${bikeDetails} ${registration}`;
}

var obj = {name : "Rahul"}

var a = myFunc2.bind(obj, "djbckjc", "dsjkjbdvsv");

console.log(a())
