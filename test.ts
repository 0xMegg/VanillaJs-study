const arr = [
  { a: 1, b: "a" },
  { a: 2, b: "b" },
  { a: 3, b: "c" },
  { a: 4, b: "d" },
];
const nod = { a: 2, b: "b" };
const dir = "c";

function cumstomFilter1(e) {
  return e.b !== dir;
}

const arr1 = arr.filter(cumstomFilter1);

console.log(arr1);
