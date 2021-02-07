// function getMiddle(s) {
//   s = s.split("");
//   if (s.length % 2 === 0) {
//     return s[s.length / 2 - 1] + s[s.length / 2];
//   } else if (s.length % 2 === 1) {
//     return s[(s.length - 1) / 2];
//   }
// }

function getMiddle(s) {
  let middle = Math.floor(s.length / 2);

  return s.length % 2 === 0
    ? s.slice(middle - 1, middle + 1)
    : s.slice(middle, middle + 1);
}
const res = getMiddle("walesai");
console.log(res);

console.log("walesa".slice(2, 4));
console.log("walesai".slice(3, 4));
console.log([1, 2, 3].slice(1, 2));
