function extractElement(arr){
let obj = {};
for(i of arr){
let val = Math.floor(i)
console.log( obj[val])
    if(!obj[val]){
        obj[val] = [];
    }
        obj[val].push(i)
    
}
return obj
}

console.log(extractElement([9.1,9.2,8.1,8.2]))