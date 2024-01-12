class Node {
    constructor (val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const treeA = new Node(1, new Node(2), new Node(3));
const treeB = new Node(1, new Node(2), new Node(3));

const tree1 = {
    val: 0,
    left: { val: 1, left: null, right: { val: 2, left: null, right: null } },
    right: null
  }

const tree2 = {
    val: 0,
    left: { val: 1, left: { val: 2, left: null, right: null }, right: null },
    right: null
  }


  function compare(a, b){
    console.log("tree A: ", a);
    console.log("tree B: ", b);
    
    function iterTree(tree, arr) {
        if (tree == null) {
            arr.push(null);
        } else {
            arr.push(tree.val);
            iterTree(tree.left, arr);
            iterTree(tree.right, arr);
        }
        return arr;
    }
    const a1 = iterTree(a, []);
    const a2 = iterTree(b, []);
    console.log("res a:", a1)
    console.log("res b:", a2)
    console.log("compare: ", a1.toString() === a2.toString());
    console.log("***")

    return a1.toString() === a2.toString();

}


console.log("res: ", compare(tree1, tree2).toString());