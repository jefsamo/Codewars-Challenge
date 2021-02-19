function hexStringToRGB(h) {
  return {
    r: parseInt(h.slice(1, 3), 16),
    g: parseInt(h.slice(3, 5), 16),
    b: parseInt(h.slice(5, 7), 16),
  };
}

const res = hexStringToRGB("#ff9933");
console.log(parseInt("caca".slice(1, 3), 16));
console.log(res);

// function hexStringToRGB(hexString) {
//   var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexString);
//   return {
//     r: parseInt(rgb[1], 16),
//     g: parseInt(rgb[2], 16),
//     b: parseInt(rgb[3], 16)
//   };
// }
