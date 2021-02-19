// function add(n) {
//   var fn = function (x) {
//     return add(n + x);
//   };

//   fn.valueOf = function () {
//     return n;
//   };

//   return fn;
// }

var add = function (n) {
  const f = (x) => add(n + x);
  f.valueOf = () => n;
  return f;
};

add(5)(6);
// console.log(res);
