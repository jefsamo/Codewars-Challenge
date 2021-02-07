var moveZeros = function (arr) {
  // TODO: Program me
  let newArr = [];
  let resArr = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      newArr.push(arr[i]);
    } else if (arr[i] === Number(0)) {
      resArr.unshift(arr[i]);
    }
  }
  return [...newArr, ...resArr];
};

const res = moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]);
console.log(res);
