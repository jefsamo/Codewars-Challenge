const res = "shopeyi7n".split("");
let result = [];

const number = "68137692681";
if (/^(090)|(081)|(070)|(091)/.test(number) && /[\d]{11}/.test(number)) {
  console.log(number);
} else {
  console.log("Not a vaid number");
}
console.log(/^(090)|(081)|(070)/.test(number));

res.map((el) => {
  if (/\d/.test(el)) {
    result.push(el);
  }
});
console.log(result);
console.log(res);
