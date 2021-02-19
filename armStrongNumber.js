const armstrongNumber = (num) => {
  if (num < 0 || typeof num !== "number") return false;

  let newSum = 0;

  const numArr = num.toString().split("");
  numArr.forEach((num) => {
    newSum += parseInt(num) ** numArr.length;
  });

  return newSum === num;
};

const res = armstrongNumber(370);
console.log(res);
