"use strict";
const data = [
    { group: 1, name: "a" },
    { group: 1, name: "b" },
    { group: 2, name: "c" },
];
function groupData(data, key) {
    const result = {};
    data.map((item) => {
        const name = item[key];
        if (!result[name])
            result[name] = [];
        result[name].push(item);
    });
    return result;
}
console.log("test: ", groupData(data, "group"));
