function Node(data, next = null) {
    this.data = data;
    this.next = next;
  }
  
function removeDuplicates(head) {
  console.log("head: ", JSON.stringify(head));
  let current = head;
  const cache = {};
  let res = null;
  
  while(current !== null) {
      console.log("iter: ", JSON.stringify(current))
      cache[current.data] = true;
      current = current.next;  
    }

  Object.keys(cache).reverse().forEach((i) => {
    res = new Node(Number(i), res)
  })

  console.log("res: ", JSON.stringify(res));
  return res;
}

const nodeList = new Node(1, new Node(2, new Node(3, new Node(2))));
console.log("list: ", JSON.stringify(nodeList));

const res = removeDuplicates(nodeList);