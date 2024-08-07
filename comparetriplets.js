function compareTriplets(a, b) {
    let scoreA = 0;
    let scoreB = 0;

    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            scoreA++;
        } else if (a[i] < b[i]) {
            scoreB++;
        }
    }
    console.log(aScore,bScore)
}


const a = [1, 2, 3];
const b = [3, 2, 1];

console.log(compareTriplets(a,b))


