function checkDuplicates(arr) {
    // arr = arr.sort((a,b) => b-a);
    // arr
    let i = 0;
    let j = 1;
    while(j < arr.length) {
        if(arr[i]  === arr[j]){
         return true;
        }
        j = j+1;
        i=i+1;
    }
    return false;
}

console.log(checkDuplicates([2,4,3,1,4,5]))

function checkduplicate(arr){
    let seen = new Set();
    let i=0;
    while(i < arr.length){
        if(seen.has(arr[i])){
            return true;
        }
        seen.add(arr[i]);
        i++;
    }
    return false;
} 
                 

// let arr1 = ["ankit", "Rahul", "Ankit", "rahul"];

// arr1 = arr1.sort((a,b) => a.localeCompare(b))
// arr1


let arr = [
    {
        id: 2,
        name: 'test'
    },
    {
        id: 3,
        name: 'rahul'
    },
    {
        id: 1,
        name: 'Ankit'
    },
]

// arr = arr.sort((a,b) => b.id - a.id)

// arr = arr.sort((a,b) => a.name.localeCompare(b.name))
// arr


let arr2  = ["it is a test", "rahul", "hello world", "ok"];
arr2 = arr2.sort((a,b) => a.length - b.length);
arr2