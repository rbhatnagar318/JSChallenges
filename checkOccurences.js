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