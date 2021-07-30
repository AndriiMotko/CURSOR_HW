const n = 4;
const m = 9;
const missEvenNumbers = true;

function getSumFromNToM(n, m, missEvenNumbers) {
    let sum = 0;

    for (n; n <= m; n++) {
        if((n%2 == 0)&&(missEvenNumbers)) {
            continue;
        } else {
            sum = sum + n;
        }
    }
    return sum;
}

export default getSumFromNToM;