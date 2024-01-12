const arr = [99, 95, 94, 91, 89, 84, 82, 74, 73, 71, 61, 0];


const sortArr = (arr) => {
    let counter = 0;

    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j+1]) {
                const temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
            counter++;
            console.log(`${counter}: cur arr: ${arr}`);
        }

    }

}

sortArr(arr);