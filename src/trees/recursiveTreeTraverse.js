const treeObj = {
    a: "1",
    b: "2",
    c: {
        a: "11",
        b: "22",
        c: {
            a: "111",
            b: "222",
            c: "333"
        }
    }
}

const treeArr = [
    1, 
    2, 
    [
        11,
        22,
        [
            111,
            222,
            333
        ]
    ]
]

const observeObjTree = (obj) => {
    for (i in obj) {
        console.log("i", obj[i]);
        if (typeof obj[i] === "object") {
            // console.log("object:", i);
            observeObjTree(obj[i])
        }
    }

}

observeObjTree(treeObj);

const observeArrTree = (tree) => {
    for (let i = 0; i < tree.length; i++) {
        console.log("i: ", tree[i]);
        if (Array.isArray(tree[i])) {
            // console.log("array: ", tree[i]);
            observeArrTree(tree[i]);
        }
    }
}

observeArrTree(treeArr);