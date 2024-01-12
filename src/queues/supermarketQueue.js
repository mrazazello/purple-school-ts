
const queue = [10, 2, 3, 3];


const queueTime = (times, amount) => {
    const tills = new Array(amount);
    // tills.forEach((i) => tills[i] = []);

    for (let i=0; i < tills.length; i++) {
        tills[i] = 0;
    }

    for (let i=0; i < times.length; i++) {
        const minTime = Math.min(...tills);
        const tillIndex = tills.indexOf(minTime);
        tills[tillIndex] = tills[tillIndex] + times[i];        
    }

    return Math.max(...tills);
}


queueTime(queue, 2);