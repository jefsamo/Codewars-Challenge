// const flatten = (...as) =>
//   as
//     .map((b) => (b instanceof Array ? flatten(...b) : b))
//     .reduce((a, b) => a.concat(b), []);

/**
   
  const flatten = (...arr) => {
  let i = 0;
  
  while (i < arr.length) {
    if (Array.isArray(arr[i])) {
      arr.splice(i, 1, ...arr[i]);
    } else {
      i++
    }
  }
  
  return arr;
}
  */
// console.log(flatten("a", ["b", 2], 3, null, [[4], ["c"]]));
function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

function multiply(multiplier, ...theArgs) {
  return theArgs.map((element) => {
    return multiplier * element;
  });
}

const numbers = [1, 2, 3];

console.log(...numbers);

let arr = multiply(2, 15, 25, 42);
console.log(arr); // [30, 50, 84]
myFun(23, 12, 2342, 235);
