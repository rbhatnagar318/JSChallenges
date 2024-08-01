function anagram(word1, word2){
    let a = word1.split("").sort().join("");
    let b = word2.split("").sort().join("");
    return a === b;
}

console.log(anagram("madam", "madam1"))