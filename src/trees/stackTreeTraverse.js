const tree = {
    data: 1,
    refs: [
        { 
            data: 5,
            refs: [
                {
                    data: 10,
                    refs: []
                },
                {
                    data: 7,
                    refs: [
                        {
                            data: 9,
                            refs: []
                        },
                        {
                            data: 8,
                            refs: []
                        }
                    ]
                },
                {
                    data: 6,
                    refs: []
                }
            ]
        },
        { 
            data: 2,
            refs: [
                {
                    data: 4,
                    refs: []
                },
                {
                    data: 3,
                    refs: []
                }
            ]
        },
    ]
}

console.log("tree: ", JSON.stringify(tree));


const stackTraverseTree = (tree) => {
    const values = [];
    const stack = [tree];

    while(stack.length > 0) {
        const cur = stack.pop();
        values.push(cur.data);

        for (let i = 0; i < cur.refs.length; i++) {
            stack.push(cur.refs[i]);
        }
    }

    console.log("values: ", values);
}

stackTraverseTree(tree);