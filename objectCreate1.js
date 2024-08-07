class Car {
    model: string;
    year: number;
    price: number;
}

drive(){
    console.log("Driving Car")
}

carStop(){
    console.log("Car stop")
}

const tesla = new Car()

tesla.model  = "TBZ";
tesla.year = 1998
tesla.price = 30000

console.log(tesla.model)
console.log(tesla.year)
console.log(tesla.price)
tesla.drive();
tesla.carStop()