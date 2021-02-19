const pow = (x, y) => {
  let result = 1;
  for (let i = 1; i <= y; i++) {
    result *= x;
  }
  return result;
};

const res = pow(2, 4);
console.log(res);
