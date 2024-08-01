//Case 1

const str = "My name is Rahul Bhatnagar";
function findLongestWord(str){
    const ans = [];
    let splitStr = str.split(" ");
    for(let i=0;i < splitStr.length;i++){
        ans.push(splitStr[i].length);
    }
    let maxLength = 0;
    let index;
    for(let i=0;i< ans.length;i++){
        if(ans[i] >= maxLength){
            maxLength = ans[i];
            index = i;
        }
    }
    return splitStr[index]
}

console.log(findLongestWord(str))

//Case 2

const arr1 = ['Mddcc','My','Ankita','Bhatnagar', 'name','is', 'Rahul', ];
function findLongestWord(arr){
  const ans = [];
    for(let i=0;i < arr.length;i++){
        ans.push(arr[i].length);
    }
    let maxLength = 0;
    let index;
    for(let i=0;i< ans.length;i++){
        if(ans[i] > maxLength){
            maxLength = ans[i];
            index = i;
        }
    }
    return arr[index]
}

console.log(findLongestWord(arr1))


//Case 3

const arr2 = [1,3,5,7,32,4,67];
function findLongestWord(arr){
    let maxLength = 0;
    let index;
    for(let i=0;i< arr.length;i++){
        if(arr[i] >= maxLength){
            maxLength = arr[i+1];
            index = i;
        }
    }
    return arr[index]
}

console.log(findLongestWord(arr2))