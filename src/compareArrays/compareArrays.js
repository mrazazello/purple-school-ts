"use strict";
exports.__esModule = true;
var _ = require("lodash");
var arr1 = [1, 2, 45, 6, 7, 77, { a: 1 }];
var arr2 = [1, 2, 45, 6, 7, 77, { a: 1 }];
var arr3 = [1, 2, 45, 6, 7, 77, 2];
function jsonCompare(a, b) {
    console.log(JSON.stringify(a));
    return JSON.stringify(a) === JSON.stringify(b);
}
console.log("compare by JSON: ", jsonCompare(arr1, arr2).toString());
function lodashCompare(a, b) {
    return _.isEqual(a, b);
}
console.log("compare by lodash: ", lodashCompare(arr1, arr2).toString());
