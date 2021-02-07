let a = "wale";
console.log(a.length > 6);

const reverseSentence = (sentence) => {
  let sArr = sentence.split(" ");
  let newArr = [];
  sArr.forEach((el) => {
    // if (el.length > 6) {
    //   newArr.push(el.split("").reverse().join(""));
    // } else {
    //   newArr.push(el);
    // }
    el.length > 5
      ? newArr.push(el.split("").reverse().join(""))
      : newArr.push(el);
  });
  return newArr.join(" ");
};

console.log(reverseSentence("Welcome"));
console.log(reverseSentence("Hey fellow warriors"));
console.log(reverseSentence("This is a test"));
console.log(reverseSentence("This is another test"));
console.log(reverseSentence("You are almost to the last test"));
console.log(reverseSentence("Just kidding there is still one more"));
console.log(reverseSentence("Seriously this is the last one"));
