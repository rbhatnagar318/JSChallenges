const debounce = (mainFunction, delay) => {
    let timer
    clearTimeout()
    return function(...args){
        timer = setTimeout(() => {
            mainFunction(...args)
        },delay)
    }
};

function searchData(){
    console.log("Search Data is calling")
}

const debounceFunction = debounce(searchData, 4000);
debounceFunction();


