// function mixedFraction(s) {
//   //your code here
//   let nume, denom;
//   s = s.split("/");
//   nume = s[0];
//   denom = s[1];
//   if (denom === 0) {
//     throw new Error("ZeroDivisionError");
//   }
//   let wholeNumber, topFraction, bottomFraction;
//   if (nume % denom !== 0) {
//     wholeNumber = Math.floor(nume / denom);
//     topFraction = nume % denom;
//     bottomFraction = parseInt(denom);
//     if (topFraction % 2 === 0 && bottomFraction % 2 === 0) {
//       topFraction /= 2;
//       bottomFraction /= 2;
//     } else if (topFraction % 3 === 0 && bottomFraction % 3 === 0) {
//       topFraction /= 3;
//       bottomFraction /= 3;
//     }
//     // console.log(wholeNumber, topFraction, bottomFraction);
//     return `${
//       wholeNumber === 0 ? "" : wholeNumber
//     } ${topFraction}/${bottomFraction}`.trim();
//   } else if (nume < denom) {
//     if (topFraction % 2 === 0 && bottomFraction % 2 === 0) {
//       topFraction /= 2;
//       bottomFraction /= 2;
//       return `${topFraction}/${bottomFraction}`;
//     } else if (topFraction % 3 === 0 && bottomFraction % 3 === 0) {
//       topFraction /= 3;
//       bottomFraction /= 3;
//       return `${topFraction}/${bottomFraction}`;
//     }
//   } else if (nume === 0) {
//     return 0;
//   }
//   return (nume / denom).toString();
// }

// const res = mixedFraction("3/0");
// console.log(res);

//
/**

 function mixedFraction(s) {
  //your code here
  let nume, denom;
  s = s.split("/");
  nume = s[0];
  denom = s[1];
  let wholeNumber, topFraction, bottomFraction;
  if (nume % denom !== 0) {
    wholeNumber = Math.floor(nume / denom);
    topFraction = nume % denom;
    bottomFraction = parseInt(denom);
    if (topFraction % 2 === 0 && bottomFraction % 2 === 0) {
      topFraction /= 2;
      bottomFraction /= 2;
    } else if (topFraction % 3 === 0 && bottomFraction % 3 === 0) {
      topFraction /= 3;
      bottomFraction /= 3;
    }
    // console.log(wholeNumber, topFraction, bottomFraction);
    return `${wholeNumber} ${topFraction}/${bottomFraction}`;
  } else if (nume < denom) {
    if (topFraction % 2 === 0 && bottomFraction % 2 === 0) {
      topFraction /= 2;
      bottomFraction /= 2;
      return `${topFraction}/${bottomFraction}`;
    } else if (topFraction % 3 === 0 && bottomFraction % 3 === 0) {
      topFraction /= 3;
      bottomFraction /= 3;
      return `${topFraction}/${bottomFraction}`;
    }
  } else if (nume === 0) {
    return 0;
  }
  return (nume / denom).toString();
}

const res = mixedFraction("6/9");
console.log(res);

 */

function mixedFraction(s) {
  //input s will be a simple fraction i.e. "4/3", "-10/7", "-22/7"
  var fraction = s.split("/").map((val) => Number(val)),
    numerator = fraction[0],
    denominator = fraction[1],
    integer = 0;

  //anything divided by 0 produces an error
  if (denominator === 0) {
    throw new Error("Division by zero");
  }

  //0 divided by anything is 0
  if (numerator === 0) {
    return "0";
  }

  /* calculate gcf and divide numerator and denominator by
         it to reduce improper fraction as much as possible */
  var gcf = greatestCommonFactor(numerator, denominator);
  numerator /= gcf;
  denominator /= gcf;

  /* calculate the integer and numerator for
         mixed fraction; round integer down */
  integer += ~~(numerator / denominator);
  numerator %= denominator;

  //if output is a mixed number
  if (integer) {
    //checks to see if fraction will be negative
    if (numerator < 0 || denominator < 0) {
      //integer needs proper sign
      integer *= integer < 0 ? 1 : -1;
    }
    return numerator !== 0
      ? //integer is signed already - make numerator and denominator positive
        `${integer} ${Math.abs(numerator)}/${Math.abs(denominator)}`
      : `${integer}`;
  }

  //if output is a simple fraction
  else {
    if (denominator < 0) {
      //make sure numerator is negative
      numerator *= numerator < 0 ? 1 : -1;
    }
    return `${numerator}/${Math.abs(denominator)}`;
  }
}

/* calculates gcf utilizing Euclid's algorithm
       https://en.wikipedia.org/wiki/Greatest_common_divisor#Using_Euclid.27s_algorithm */
function greatestCommonFactor(a, b) {
  return b === 0 ? a : greatestCommonFactor(b, a % b);
}
const reg = /-/g;
console.log(reg.test("waleshow"));

console.log(mixedFraction("4/3"));
console.log(greatestCommonFactor(24, 16));
console.log(7 % 10);
