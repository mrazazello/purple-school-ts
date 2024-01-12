export {};

const data = [
  { id: 1, name: "Vasya" },
  { id: 2, name: "Petya" },
  { id: 4, name: "Nadya" },
  { id: 7, name: "Kostya" },
  { id: 0, name: "Varya" },
  { id: 3, name: "Egor" },
];

interface objWithId {
  id: number;
}

function sortObjWithId<T extends objWithId>(
  data: T[],
  sort: "ascend" | "descend"
): T[] {
  return data.sort((a, b) => {
    switch (sort) {
      case "ascend":
        return a.id - b.id;
      case "descend":
        return b.id - a.id;
    }
  });
}

console.log("test1: ", sortObjWithId(data, "ascend"));
console.log("test2: ", sortObjWithId(data, "descend"));
