function sameFrequency(arr1, arr2){

    let s1 = arr1;
    let s2 = arr2;
    
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    if(s1.length !== s2.length) return false;
    
    for(let i of s1){
        frequencyCounter1[i] = (frequencyCounter1[i] || 0) + 1
    }

    for(let i of s2){
        frequencyCounter2[i] = (frequencyCounter2[i] || 0) + 1
    }

    for(let key in frequencyCounter1){
        if(!(key in frequencyCounter2)){
            return false;
        }
        if(frequencyCounter1[key] !== frequencyCounter2[key]){
            return false;
        }
    }
    return true;

}

console.log(sameFrequency("abc", "bac"))

console.log(sameFrequency([1,2,3], [3,2,1]))





function check(...args) {
        for(let i=0;i< args.length;i++){
            console.log(args[i]);
        }
}

console.log(check(1,2,3,4,5,6,67,7,8));




































// function sameFreqeuency(s1, s2) {
//     if(s1.length !== s2.length) return false;
//     const frequencyCounter1 = {};
//     const frequencyCounter2 = {};
    
//     //Step 1 
//     for(let i of s1){
//         frequencyCounter1[i] = (frequencyCounter1[i] || 0) + 1;
//     }
//     for(let i of s2){
//         frequencyCounter2[i] = (frequencyCounter2[i] || 0) + 1;
//     }
//     frequencyCounter2

//     //Step 2
//     for(let key in frequencyCounter1){
//         //for Key
//         if(!(key in frequencyCounter2)){
//             return false;
//         }

//         //for Value
//         if(frequencyCounter1[key] !== frequencyCounter2[key]) {
//             return false;
//         }
//     }

//     return true;
// }



// console.log(sameFreqeuency("stasd", "stasd")); 
// //O(n)




// //includes, forEach, indexOf, findIndex

// // //depends the size(n) - complexity grows
// // for(let i=0; i<n;i++) {
// //     for(let j=0; j<n; j++) {

// //     }
// // }

// // //O(n2)


// // for(let i=0; i<n; i++) {} //O(n)
// // for(let j=0; j<n; j++) {} // o(n)
// //O(n)