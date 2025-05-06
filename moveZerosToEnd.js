// function moveZerotoEnd(arr){
//     let nonzeroindex = 0;

//     for(let i=0;i<arr.length;i++){
//         if(arr[i] !==0){
//             arr[nonzeroindex] = arr[i];
//             nonzeroindex++
//         }
//     }

//     for(let i=nonzeroindex; i < arr.length;i++){
//         arr[i] = 0
//     }
// }
// let arr = [0,4,0,1,7,8,0,6]

// console.log(moveZerotoEnd(arr))
// console.log(arr);

let arr = [0,4,0,1,7,8,0,6]
let arr1 = arr.sort((a,b) => b-a)
console.log(arr1)
