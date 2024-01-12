const arr1 = ["asdas", "sss", "eeww", "asdasdasdas"];
const arr2 = ["asdaassa", "sss", "eeww", "asssdasdasdas"];

const obj1: Record<string, string> = {};

arr1.forEach((el) => (obj1[el] = el));

const res: string[] = [];

arr2.forEach((el) => {
  if (obj1.hasOwnProperty(el)) {
    res.push(el);
  }
});

console.log("result: ", res);
