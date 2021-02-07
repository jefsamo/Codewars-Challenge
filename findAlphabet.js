function high(x) {
  x = x.split("");
  let alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
  let res = x.map((el) => {
    el = el.split("");
    return el;
  });
  console.log(res);
}

high("save money today");

var alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
let word = "savezy";
word = word.split("");
let res = word.map((el) => {
  return alphabets.indexOf(el) + 1;
});
console.log(res);
console.log(word);

console.log(alphabets.indexOf("b") + 1);
