const a = [1,2,3,4,5,6];
const b = [2,3,4,5,6,7];

const c = a.filter((item) => b.includes(item))
console.log(c)