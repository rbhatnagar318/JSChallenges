function anagram(word1, word2){
    let a = word1.split("").sort().join("");
    let b = word2.split("").sort().join("");
    return a === b;
}

console.log(anagram("madam", "madam1"))

// Improved code

const a = "madam";
const b = "madam1";

function isAnagram(a,b){
return a.split("").reverse().join("") === b.split("").reverse().join("")
}

console.log(isAnagram(a, b))