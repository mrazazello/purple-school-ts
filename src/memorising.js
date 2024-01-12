const _ = require("lodash");

String.prototype.hashCode = function() {
    var hash = 0,
      i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
      chr = this.charCodeAt(i);
      hash = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  }

function memo(fn) {
    let result;
    let cache = {};

    return function memofn (...args) {
        const hash = args.toString().hashCode();
        console.log("hash: ", hash);
        // console.log("cache: ", cache);

        if (!cache.hasOwnProperty(hash)) {
            console.log("not cached");
            result = fn(...args);
            cache[hash] = { result, args };
            return result;
        } else {
            console.log("cached");
            return cache[hash].result;
        }
    }
}

const summ = (a, b) => {
    return a + b;
} 

const memorized = memo(summ);

console.log("test array to string", [1,2,4,11, 2, null, 44, undefined, 55].toString());
console.log("test array to string", JSON.stringify([1,2,4,11, 2, null, 44, undefined, 55]));



console.log("memorized fn attempt 1: ", memorized(1, 2));
console.log("memorized fn attempt 1: ", memorized(3, 4));
console.log("memorized fn attempt 1: ", memorized(2, 2));
console.log("memorized fn attempt 1: ", memorized(1, 1));
console.log("memorized fn attempt 1: ", memorized(2, 1));
console.log("memorized fn attempt 2: ", memorized(1, 2));
console.log("memorized fn attempt 2: ", memorized(3, 4));

