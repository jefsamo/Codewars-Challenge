function isArmstrongNumber(n) {
  let strN = n.toString();
  let power = strN.length;
  let sum = 0;
  for (let i = 0; i < strN.length; i++) {
    sum += Math.pow(Number(strN[i]), power);
  }

  return sum;
}

const a = isArmstrongNumber(23);

console.log(a);
