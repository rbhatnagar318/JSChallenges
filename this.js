var obj = {
    name:'Rahul',
    getName: function(){
        return `${this.name} is great`
    }
}

console.log(obj.getName());

function sayHello(){
    return "" + this.name;
}

var obj1 = {name: "Rahul"};

console.log(sayHello.call(obj1))

function saySomething(message){
    return this.name + " is " + message;
}

var obj2  = {name: 'Rahul'};

console.log(saySomething.apply(obj2,["Awesome"]));

function bikeDetails(registrationname, brandName){
    return this.name + "," + registrationname + brandName;
}

var obj3 = {name: "Rahul"};

var a = bikeDetails.bind(obj3, '787908', 'Audi');
console.log(a());




