function flattenObject(obj, prefix=''){
    let result = {};
    for(const key in obj){
        if(obj.hasOwnProperty(key)){
            const value = obj[key];
            const newKey = prefix ? `${prefix}: ${key}`: key;
            if(typeof value === 'object' && value !== "" && !Array.isArray(value)){
                Object.assign(result,flattenObject(value,newKey))
            }else{
                result[newKey] = value;
            }
        }
    }
    return result
}

const nestedObj = {
    name: "John",
    contact: {
        phone: "987-654-3210",
        email: "john123@xyz.com",
        address: {
            city: "Berlin",
            country: "Germany"
        }
    }
}

console.log(flattenObject(nestedObj))