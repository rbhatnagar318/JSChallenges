function reverseaStirng(str){
    return str.split(" ").reverse().join(" ")
}

console.log(reverseaStirng("My name is Rahul Bhatnagar"))

function customReverseAString(str){
    let word = "";
    for(let i=str.length-1;i>=0;i--){
        word += str[i]
    }
    return word;
}

console.log(customReverseAString("My name is Rahul Bhatnagar"))