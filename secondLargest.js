


//Case 1

const str1 = "My Ankita name is Rahul Bhatnagar";

function findsecondLargest(str){
    let ans = [];
    let strSplit = str.split(" ");
    for(let i=0;i < strSplit.length;i++){
        ans.push(strSplit[i].length);
    }
    let max = 0;
    let secondMax = 0;
    let index;
    for(let i=0;i< ans.length;i++){
        if(ans[i] > max){
            max = ans[i];
        }
    }

    for(let i=0;i< ans.length;i++){
        if(ans[i] > secondMax && ans[i] !== max){
            secondMax = ans[i]
            index = i;
        }
    }
    return strSplit[index]
}

console.log(findsecondLargest(str1))


//Case 2

const arr1 = ['Mddcc','My','Ankita','Bhatnagar', 'name','is', 'Rahul'];
function findsecondLargest(arr){
    let ans = [];
    for(let i=0;i < arr.length;i++){
        ans.push(arr[i].length);
    }
    let max = 0;
    let secondMax = 0;
    let index;
    for(let i=0;i< ans.length;i++){
        if(ans[i] > max){
            max = ans[i];
        }
    }

    for(let i=0;i< ans.length;i++){
        if(ans[i] > secondMax && ans[i] !== max){
            secondMax = ans[i]
            index = i;
        }
    }
    return arr[index];
}

console.log(findsecondLargest(arr1))

//Case 3

const arr2 = [1,3,5,7,32,4,67];

function secondLaregestNumber(arr){
    let max = 0;
    let secondMax = 0;
    let index;
    
    for(let i=0;i< arr.length;i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }

    for(let i=0;i< arr.length;i++){
        if(arr[i] > secondMax && arr[i] !== max){
            secondMax = arr[i]
            index = i;
        }
    }

    return arr[index]
}
console.log(secondLaregestNumber(arr2))
