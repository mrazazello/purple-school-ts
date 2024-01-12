const data = [
  { group: 1, name: "a" },
  { group: 1, name: "b" },
  { group: 2, name: "c" },
];

function groupData<T extends Record<string, any>>(data: T[], key: keyof T) {
  const result: { [name: string]: T[] } = {};

  data.map((item) => {
    const name = item[key];

    if (!result[name]) result[name] = [];
    result[name].push(item);
  });

  return result;
}

console.log("test: ", groupData(data, "group"));
