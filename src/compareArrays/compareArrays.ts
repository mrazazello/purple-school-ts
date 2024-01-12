import * as _ from "lodash";

const arr1 = [1, 2, 45, 6, 7, 77, {a: 1}];
const arr2 = [1, 2, 45, 6, 7, 77, {a: 1}];
const arr3 = [1, 2, 45, 6, 7, 77, 2];

function jsonCompare (a: any[], b: any[]) {
    console.log(JSON.stringify(a));
    return JSON.stringify(a) === JSON.stringify(b);
}

console.log("compare by JSON: ", jsonCompare(arr1, arr2).toString());


function lodashCompare (a: any[], b: any[]) {
    return _.isEqual(a, b);
}

console.log("compare by lodash: ", lodashCompare(arr1, arr2).toString());