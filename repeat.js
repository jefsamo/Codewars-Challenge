/*function accum(word) {
  // your code
  word = word.toLowerCase();
  var arrayWord = word.split("");

  var indexes = arrayWord.map((el) => {
    let indexLetter = arrayWord.indexOf(el);
    return el.repeat(indexLetter + 1);
  });

  let finalResult = indexes;
  const res = finalResult.map((index) => {
    return index.charAt(0).toUpperCase() + index.slice(1);
  });
  return res.join("-");
}*/
function accum(word) {
  // your code
  word = word.toLowerCase();
  var arrayWord = word.split("");

  var indexes = arrayWord.map((el, i) => {
    return el.repeat(i + 1);
  });

  let finalResult = indexes;
  const res = finalResult.map((index) => {
    return index.charAt(0).toUpperCase() + index.slice(1);
  });
  return res.join("-");
}
// function accum(word) {
//   // your code
//   word = word.toLowerCase();
//   var arrayWord = word.split("");

//   var indexes = arrayWord.map((el) => {
//     return arrayWord.indexOf(el);
//   });
// }

console.log(accum("sshopnpeyinn"));
