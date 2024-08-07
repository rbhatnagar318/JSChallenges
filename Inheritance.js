class person{
    name: String;
    age: Number;

    constructor(name: String, age: Number){
        this.name = name;
        this.age = age;
    }

    eat(){
        console.log(`Whats for Dinner`)
    }

    speak(){
        console.log(`My name is ${this.name}  and my age is ${age}`)
    }
}

class chef extends Person{
    occupation: String;

    constructor(name: string, age: Number, occupation: string){
        super(name, age)
        this.occupation = occupation
    }

    speak(){
        console.log(`What is your occpation - ${this.occupation}`)
    }

    cook(){
        console.log(`Cook something`)
    }
}