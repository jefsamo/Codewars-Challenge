function toUnderscore(string) {
  // TODO: complete
  // if (/\d/.test(string)) {
  //   string = string
  //     .match(/[A-Z][a-z]+/g)
  //     .join("_")
  //     .toLowerCase();
  //   return string;
  // }

  // return string;
  return string
    .toString()
    .split(/(?=[A-Z])/)
    .join("_")
    .toLowerCase();
}

// Wale_Sho
const res = toUnderscore("App7Test");
console.log(res);
console.log("My7String".split(/(?=[A-Z])/));
