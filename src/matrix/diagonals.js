
const testArr = [
    [4, 5, 7],
    [3, 9, 1],
    [8, 6, 2]
   ];

const isInRange = (x, y, arr) => {
    if (x < 0 || y < 0) return false;
    const range = arr.length - 1;
    if (x > range || y > range) return false;
    return true;
}

const createDiogonal = (startX, startY, arr) => {
    let x = startX;
    let y = startY;
    const diogonal = [];

    while (x >= 0 || y >= 0) {
        diogonal.push(arr[x][y]);
        x++;
        y--;
        if (!isInRange(x, y, arr)) break;
    }

    return diogonal;
}


// console.log("test diagonal: ", createDiogonal(0, 2, testArr));


const printDiogonals = (arr) => {
    const result = [];

    let x = arr.length - 1;
    let y = arr.length - 1;

    while (x >= 0) {
        const diag = createDiogonal(x, y, arr);
        console.log("diag: ", diag)
        result.push(...diag);
        x--;
        if (!isInRange(x, y, arr)) break;
    }

    x++;
    y--;
    while (y >= 0) {
        const diag = createDiogonal(x, y, arr);
        console.log("diag: ", diag)
        result.push(...diag);
        y--;
        if (!isInRange(x, y, arr)) break;
    }

    return result;
}

console.log("res: ", printDiogonals(testArr));