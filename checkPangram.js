const checkPangram = (string) => {
  if (typeof string !== "string") {
    throw new TypeError("The given value is not a string");
  }

  const frequency = new Set();

  for (const letter of string.toLowerCase()) {
    if (letter >= "a" && letter <= "z") {
      frequency.add(letter);
    }
  }

  return frequency.size === 26;
};

const res = checkPangram("Jackdaw love my big phinx of quartz");
console.log(res);
