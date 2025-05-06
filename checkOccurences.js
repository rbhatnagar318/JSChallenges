function checkOccurencess(arr){
    let a = arr.split("") 
    let element = {};
    a.forEach(item =>{
        if(element[item]){
            element[item] +=1
        }else{
            element[item]  =1
        }
    })
    return element;
}

console.log(checkOccurencess("GeekforGeeks"))


function checkOccurences(arr){
  let a = arr.split("");
  let frequency = {};
  for(let char of a){
    frequency[char] = (frequency[char] || 0) + 1
  }
  return frequency
}


console.log(checkOccurences("GeekforGeeks"))


// Case 2

function count(str) {
    let element = {};
    let max = 0;
    let a = str.split("");
    a.forEach((item) => {
      if (element[item]) {
        element[item] += 1;
      } else {
        element[item] = 1;
      }
    });
    for (let key in element) {
       if(element[key] > max){
         max = element[key];
         index = key
      }  
    }
    return `{index} is {max} times`
  }
  
  
  console.log(count("aabbbbccdd"));

  function checkOccurences(str){
    let maxCount = 0;
    let maxChar = '';
    let frequencyCounter = {};
    for(let i of str){
        frequencyCounter[i] = (frequencyCounter[i] || 0) + 1;
        if(frequencyCounter[i] > maxCount){
            maxCount = frequencyCounter[i];
            maxChar = i;
        }
    }
    return `${maxChar} is occuring ${maxCount} times`
}

console.log(checkOccurences("GeekforGeeks"));

//Find firstNonRepeatingChar

function firstNonRepeatingChar(str){
  let frequencyCounter = {};
  for(let i of str){
    frequencyCounter[i] = (frequencyCounter[i] || 0) + 1;
  }

  for(let char of str){
    if(frequencyCounter[char] === 1){
      return char
    }
  }
  return null
}

console.log(firstNonRepeatingChar("aabbeccdd"))
