// let arr = [999, 10, 4, 1, 2, 3, 6];
// let maxNum = arr[0];
// let minNum = arr[2];
// arr.sort((a, b) => {
//   return a - b;
// });

// console.log(arr);

const descendingOrder = (num) => {
  const sNum = num.toString();
  const newNum = sNum.split("");
  newNum.sort((a, b) => {
    return b - a;
  });
  return newNum.join("");
};

console.log(descendingOrder(4287834));
