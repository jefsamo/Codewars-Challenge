function inArray(array1, array2) {
  //...
  array2 = array2.join("");
  let res = [];
  array1.map((el) => {
    if (array2.includes(el)) {
      res.push(el);
    }
  });
  return res;
}

const result = inArray(
  ["tarp", "mice", "bull"],
  ["lively", "alive", "harp", "sharp", "armstrong"]
);
console.log(result);
console.log("livelyyy".includes("livest"));
