class NodeItem {
    private data: number;
    private next: NodeItem | null;

    constructor(data: number, next = null) {
        this.data = data;
        this.next = next;
    }
}

const test = new NodeItem(1);

// test.data = 2;
