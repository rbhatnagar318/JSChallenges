const s1 = "Hello";
const s2 = "World1234";

function mergeTwoStringAl(s1, s2){

    let maxLength = Math.max(s1.length, s2.length);
    let result="";

    for(let i=0;i< maxLength;i++){
        if(i < s1.length){
            result += s1[i]; 
        }
        if(i < s2.length){
            result += s2[i];
        }
    }
    return result;
}
console.log(mergeTwoStringAl(s1, s2))