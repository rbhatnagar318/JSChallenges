function checkOccurences(arr){
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
    return max
  }
  
  
  console.log(count("aabbbbccdd"));
