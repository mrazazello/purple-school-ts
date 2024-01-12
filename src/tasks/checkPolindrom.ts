function checkPolindrom(str: string): boolean {
  const polindrom = str.split("").reverse().join("");
  return polindrom === str;
}

console.log(checkPolindrom("test"));
console.log(checkPolindrom("aza"));
