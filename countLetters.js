function countLetters(str, letter){
    let count = 0;
    for(let i=0;i< str.length;i++){
        if(str.charAt(i) === letter){
            count++
        }
    }
    return count;
}
console.log(countLetters("GeekforGeeks","e"))

function countArrayElements(arr, value){
    let count = 0;
    arr.forEach((item) => item === value && count++)
    return count;
}

console.log(countArrayElements(['cat', 'dog', 'cat'], 'cat'))