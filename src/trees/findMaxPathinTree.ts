class TreeNode {
    value: number;
    left: TreeNode | undefined;
    right: TreeNode | undefined;

    constructor(value: number, left?: TreeNode, right?: TreeNode) {
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

const perfectTree = new TreeNode(5, new TreeNode(-22, new TreeNode(9), new TreeNode(50)), new TreeNode(11, new TreeNode(9), new TreeNode(2)));


// console.log("tree: ", node1);

function findMaxPathinTree(root: TreeNode) {
    let max = 0;
  
    const checkNode = (node: TreeNode, sum: number): void => {
        console.log(`node: ${node.value}, sum: ${sum}`)

        if (node.left) checkNode(node.left, sum + node.value);
        if (node.right) checkNode(node.right, sum + node.value);
        if (node.right === undefined && node.left === undefined) {
            console.log(`!!! end: ${node.value}, sum: ${sum}`)
            if (sum + node.value > max) max = sum + node.value;
        }
    }

    checkNode(root, 0);
    return max;
}

findMaxPathinTree(node1)