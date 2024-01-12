const myFunction = () => console.log("test 1");

const funcToResolve = setTimeout(myFunction, 3000);

// const res = new Promise((resolve) => {
//   resolve(funcToResolve);
// });

const res2 = new Promise((resolve) => {
  resolve(setTimeout(() => console.log("test 2"), 3000));
});

// console.log("res: ", res);
