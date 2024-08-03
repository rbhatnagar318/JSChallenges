// function modifyArray(arr, callback){
//     arr.push(100);
//     callback();
// }

// var arr = [1,2,3,4,5,6];
// modifyArray(arr, function(){
//     console.log("Modified Array", arr)
// })

function modifyArray(arr, callback){
    arr.push(100)
    callback()
}

let arr = [1,2,3,4,5,6]
modifyArray(arr, function(){
    console.log("tHE MODIFIED ARRAY IS " + arr)
})



// var arrayList = [1,2,3,4]

// console.log(Array.isArray(arrayList))


// var arrayList1 = arrayList;
// // arrayList.length = 0;s
// arrayList = [];
// console.log(arrayList)
// console.log(arrayList1)


// let promise = new Promise((resolve, reject) =>{
//     let a = 18
//     if(a<=18){
//         resolve("I am in ")
//     }else{
//         reject("IO am out")
//     }
// })

// console.log(promise)