const maxCharacter = (value, isCaseSensitive = true) => {
  if (typeof value !== "string") {
    throw new TypeError("The param should be a string");
  } else if (!value) {
    throw new Error("The param should be a valid string");
  }

  const occurrences = {};
  for (let i = 0; i < value.length; i++) {
    const word = isCaseSensitive ? value[i] : value[i].toUpperCase();
    // const char = value[i];
    if (/\s/.test(word)) continue;
    occurrences[word] = occurrences[word] + 1 || 1;
  }
  let maxCharacter = null;
  let maxCount = 0;
  console.log(occurrences);
  Object.keys(occurrences).forEach((char) => {
    if (occurrences[char] > maxCount) {
      maxCount = occurrences[char];
      maxCharacter = char;
    }
  });
  return { maxCharacter, occurrences };
};

// const res = maxCharacter("HelloL", true);
// console.log(res);
// const value = "Hello World";
// const occurrences = {};
// for (let i = 0; i < value.length; i++) {
//   const word = value[i];
//   // const char = value[i];
//   if (/\s/.test(word)) continue;
//   occurrences[word] = occurrences[word] + 1 || 1;
// }
// console.log(occurrences);

// console.log({ H: 1, E: 1, L: 2, O: 1 } === { H: 1, E: 1, L: 2, O: 1 });
