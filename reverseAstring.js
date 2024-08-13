function reverseaStirng(str){
    return str.split(" ").reverse().join(" ")
}

console.log(reverseaStirng("My name is Rahul Bhatnagar"))

function customReverseAString(str){
    let word = "";
    for(let i=str.length-1;i>=0;i--){
        word += str[i]
    }
    if(str === word){
        return true
    }
    return false
}

console.log(customReverseAString("madam"))