function Node(data) {
    this.data = data === undefined ? null : data;
    this.next = null;
  }
  
function reverse(list) {
    if (!list) return;
    let current = list;
    let newList;
    let tail = null;

    while(current) {
        newList = new Node(current.data);
        newList.next = tail;
        tail = newList;
        current = current.next;
    }
    list.data = newList.data;
    list.next = newList.next;
}