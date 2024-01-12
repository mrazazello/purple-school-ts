class TreeNode {
    constructor( value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

const node9 = new TreeNode(9);
const node8 = new TreeNode(8);

const node7 = new TreeNode(7, node9, node8);
const node6 = new TreeNode(6);
const node5 = new TreeNode(5, node7, node6);

const node4 = new TreeNode(4);
const node3 = new TreeNode(3);
const node2 = new TreeNode(2, node4, node3);
const node1 = new TreeNode(1, node5, node2);
// console.log("tree: ", node1);

const perfectTree = new TreeNode(5, new TreeNode(-22, new TreeNode(9), new TreeNode(50)), new TreeNode(11, new TreeNode(9), new TreeNode(2)));



function recursiveTraverseTree(root) {
    const values = [];

    const checkNode = (node) => {
        if (node.value) values.push(node.value);
        if (node.left !== undefined) checkNode(node.left);
        if (node.right !== undefined) checkNode(node.right);
    }

    checkNode(root);
    console.log("values: ", values);
}

recursiveTraverseTree(perfectTree);



const stackTraverseTree = (tree) => {
    const stack = [tree];
    const values = [];

    while(stack.length > 0) {
        const current = stack.pop();
        if (current.value !== null) values.push(current.value);
        if (current.left !== null) stack.push(current.right);
        if (current.right !== null) stack.push(current.left);
        if (current.left === null && current.right === null) {
            console.log(`end:`)
        }
    }
    console.log("nodes: ", values.toString());
}

// stackTraverseTree(node1);

const stackTraverseTreeWide = (tree) => {
    const stack = [tree];
    const values = [];

    while(stack.length > 0) {
        const current = stack.shift();
        if (current.value !== null) values.push(current.value);
        if (current.left !== null) stack.push(current.right);
        if (current.right !== null) stack.push(current.left);
        if (current.left === null && current.right === null) {
            // console.log(`end: ${current.value} values: ${values}`)
            
        }
    }
    console.log("nodes: ", values.toString());
}

// stackTraverseTreeWide(node1);