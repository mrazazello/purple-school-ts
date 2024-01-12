const a = [1, 2, 3, 5, 7, 11, 20];
const b = [4, 8, 9, 10, 12, 21];

console.log("out of range: ", a[7]);


const mergeSortedArrays = (a, b) => {
    const result = [];
    let i = 0;
    let j = 0;
    console.log("a.length: ", a.length);
    console.log("b.length: ", b.length);

    while (i < a.length && j < b.length) {
        console.log("i: ", i, " j: ", j);

        if (a[i] === b[j]) {
            result.push(a[i]);
            i++;
            j++;
            continue;
        }

        if (a[i] < b[j]) {
            result.push(a[i]);
            i++;
        }

        if (a[i] > b[j]) {
            result.push(b[j]);
            j++;
        }

        if (a[i] === undefined) {
            result.push(b[j]);
            j++;
            continue;
        }

        if (b[j] === undefined) {
            result.push(a[i]);
            i++;
            continue;
        }

    }
    return result;
}

const res = mergeSortedArrays(a, b);
console.log("res: ", res);