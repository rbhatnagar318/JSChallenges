function countVowels(str){
    let count = 0;
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    for(let char of str.toLowerCase()){
        if(vowel.includes(char)){
            count++
        }
    }
    return count;
}

console.log(countVowels('GeeksforGeeks'))