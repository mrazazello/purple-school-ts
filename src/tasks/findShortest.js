"use strict";
const mydata = "asdasdas asdas asdasd asds asdasdasdsa sdssssaaaaassx";
const findShortest = (str) => {
    return str.split(" ").sort((a, b) => a.length - b.length)[0];
};
console.log("result: ", findShortest(mydata));
