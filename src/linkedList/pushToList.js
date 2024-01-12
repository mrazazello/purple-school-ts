let chained = null;

function Node(data, next = null) {
    this.data = data;
    this.next = next;
}

const x = new Node(1);
console.log("x: ", x);

class CNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

const y = new CNode(2);
console.log("y: ", y);

function push(head, data) {
    if (head === null) {
        return new Node(data);
  } else {
        const curData = head.data;
        head.data = data;
        head.next = push(head.next, curData);
        return head;
  }
}

function buildOneTwoThree() {
    let chain = push(null, 3);
    chain = push(chain, 2);
    chain = push(chain, 1);
    return chain;
}

function length(head) {
    const iter = (head, counter = 0) => {
        console.log("iter: ", head, counter);
        if (head === null) return counter;
        counter++;
        return iter(head.next, counter);
    }

    return iter(head);
 }

function count(head, data) {
    const iter = (head, data, counter = 0) => {
        console.log("iter: ", head, data, counter);
        if (head === null) return counter;
        if (head.data === data) counter++;;
        return iter(head.next, data, counter);
    }

    return iter(head, data);
}




let test = buildOneTwoThree();
// test = push(test, 2);
// console.log("length: ", length(test));

// console.log(test);
// console.log("counter: ", count(test, 2));


