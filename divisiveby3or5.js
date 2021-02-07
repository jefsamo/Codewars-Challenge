function solution(number) {
  let res = [];
  for (i = 1; i < number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      res.push(i);
    } else if (i % 3 === 0) {
      res.push(i);
    } else if (i % 5 === 0) {
      res.push(i);
    }
  }
  let sum = 0;
  for (i = 0; i < res.length; i++) {
    sum += res[i];
  }
  return sum;
}

const finalRes = solution(10);
console.log(finalRes);
