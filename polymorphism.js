class A{
name: string = "A";

print(){
    console.log("I am class A")
}
}

class B extends A{
name: string = "B";

print(){

    super.print() // I am class A
     console.log("I am class B") 
}
}

const tesla = new B()

tesla -  I am class A I am class B