
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    length = 1;

    constructor(rootNode) {
        this.list = rootNode;
    }

    push(data) {
        const newList = new Node(data, this.list);
        this.list = newList;
        this.length++;
    }

    getList() {
        return this.list;
    }
    
    getLength() {
        let length = 0;
        let current = this.list;
        while(current != null) {
            length++;
            current = current.next;
        }
        return length;
    }

    getSum() {
        let sum = 0;
        let current = this.list;
        while(current != null) {
            sum += current.data;
            current = current.next;
        }
        return sum;
    }

    getNth(num) {
        let index = 0;
        let current = this.list;
        while(current != null && index != num) {
            index++;
            current = current.next;
        }
        if (current == null && i > 0 && i < index) throw new Error("error")
        return current;
    }

    insertNth(index, data) {
        let i = 0;
        let prev = null;
        let current = this.list;

        while(current != null && i != index) {
            i++;
            prev = current;
            current = current.next;
        }

        if (current == null && i > 0 && i < index) throw new Error("error");

        const newTail = new Node(data, current);

        if (prev != null) {
            prev.next = newTail;
            return this.list;
          } else {
            return newTail;
          };

    }


}

const myNode = new Node(1);
// console.log("my node: ", myNode);

const myList = new LinkedList(myNode);
// console.log("my list: ", myList);
// console.log("my list getLength: ", myList.getLength());
// console.log("my list getSum: ", myList.getSum());


myList.push(2);
// console.log("my list: ", myList);
// console.log("my list getSum: ", myList.getSum());

myList.push(3);
console.log("my list: ", JSON.stringify(myList.getList()));
// console.log("my getNth: ", myList.getNth(3));
// console.log("insertNth: ", myList.insertNth(0, 777));
myList.insertNth(3, 777);
console.log("my list: ", JSON.stringify(myList.getList()));