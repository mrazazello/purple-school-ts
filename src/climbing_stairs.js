const arr = [10, 15, 20];

// for (let i = 0; i < 1000; i++) {
//     let randomNumber = Math.floor(Math.random() * 10) + 1;
//     arr.push(randomNumber);
// }

const climbingStairs = (arr) => {
    const len = arr.length;
    const memo = [];

    const fibN = (n) => {
        if (n < 0) return 0;
        if (n === 0 || n === 1) return arr[n];
        
        if (memo[n]) return memo[n];

        memo[n] = Math.min(fibN(n - 1), fibN(n - 2)) + arr[n];
        return memo[n];
    }

    return Math.min(fibN(len - 1), fibN(len - 2));
}

const res = climbingStairs(arr);

console.log("res: ", res);