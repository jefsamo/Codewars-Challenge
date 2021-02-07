function sumTwoSmallestNumbers(numbers) {
  //Code here
  numbers.sort((a, b) => {
    return a - b;
  });
  return numbers[0] + numbers[2];
}
console.log("a".repeat(5));
console.log(sumTwoSmallestNumbers([2, 3, 4, 5, 100, 234]));
