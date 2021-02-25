function myFunction() {
  const entry = document.getElementById("inputValues").value;
  if (entry != null) {
    var a = vowelCount(entry);

    document.getElementById("a").value = a.vowelCount.a;
    document.getElementById("e").value = a.vowelCount.e;
    document.getElementById("i").value = a.vowelCount.i;
    document.getElementById("o").value = a.vowelCount.o;
    document.getElementById("u").value = a.vowelCount.u;
  } else {
    alert("On God");
  }
}

// let vowelCount = (input) => {
//   let newInput = input.toString().trim();

//   //strip all the spaces and merge all words into 1
//   let word = newInput.replace(/\s+/g, "");

//   let newArr = word.split("");

//   let totalCount = 0;
//   let vowelCount = {
//     a: 0,
//     e: 0,
//     i: 0,
//     o: 0,
//     u: 0,
//   };

//   newArr.forEach((v) => {
//     let vowels = ["a", "e", "i", "o", "u"];
//     if (vowels.includes(v)) {
//       totalCount += 1;
//       switch (v) {
//         case "a":
//           vowelCount.a = vowelCount.a += 1;
//           break;
//         case "e":
//           vowelCount.e = vowelCount.e += 1;
//           break;
//         case "i":
//           vowelCount.i = vowelCount.i += 1;
//           break;
//         case "o":
//           vowelCount.o = vowelCount.o += 1;
//           break;
//         case "u":
//           vowelCount.u = vowelCount.u += 1;
//           break;
//       }
//     }
//   });

//   return { totalCount: totalCount, vowelCount: vowelCount };
// };

const vowelCount = (input) => {
  if (/\s/.test(input)) input = input.replace(/\s/g, "");
  let vowels = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
  };
  for (i = 0; i < input.length; i++) {
    Object.keys(vowels).forEach((el) => {
      if (input[i] === el) {
        vowels[el]++;
      }
    });
  }
  const totalvowelCount = Object.values(vowels).reduce((acc, val) => {
    return acc + val;
  }, 0);

  return { vowels, totalvowelCount };
};

console.log(vowelCount("Olawale Shopeyineofifaiouu jhsdfjnfiou"));
