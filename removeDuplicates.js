function removeDuplicates(arr){
    return arr.filter((item,index) => arr.indexOf(item) !== index)
}

console.log(removeDuplicates([1,2,3,1,46,7,6,4]))


function areThereDuplicates(...args) {
    for (let i = 0; i < args.length; i++) {
      for (let j = i + 1; j < args.length; j++) {
        if (args[i] === args[j]) {
          return true;
        }
      }
    }
    return false
  }
  
  console.log(areThereDuplicates(1, 3, 3));


  function count(str) {
    for(let i=0;i< str.length;i++){
      for(let j=i+1;j< str.length;j++){
        if(str[i] === str[j]){
            return true;
          }
        }  
      }
    return false;
    }
  
  
  
   console.log(count([1,2,2]));