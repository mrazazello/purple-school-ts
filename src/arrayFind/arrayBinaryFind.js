const data = [1, 2, 4, 5, 7, 9, 11, 15, 18, 20, 23, 16, 19, 30, 31, 33, 45];

const arrayBinaryFind = (arr, el) => {

    let start = 0;
    let end = arr.length;
    let middle = Math.floor((end - start) / 2);

    console.log("middle", middle)

    while (middle > 0) {

        
        if (arr[middle] < el) {
            start = middle;
            middle = Math.floor(middle + (end - middle) / 2);
        } else {
            end = middle;
            middle = Math.floor((middle - start) / 2);
        }
        
        if (arr[middle] === el) {
            console.log("here")
            return middle;
        }
        console.log("start: ", start, " middle: ", middle, " end: ", end)
    }

    return null;
}

const res = arrayBinaryFind(data, 1);


console.log("res: ", res, "data: ", data[res]);