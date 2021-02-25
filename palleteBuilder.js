const palette = document.querySelector("#palette");
// palette.addEventListener("click", handleClick);

// let paletteBuilder = colourBuilder();

// for (const colour of paletteBuilder) {
//   const element = document.createElement("li");
//   element.style.backgroundColor = colour;
//   palette.appendChild(element);
// }

// function handleClick(el) {
//   console.log(`You clicked on this colour: ${el.target.style.backgroundColor}`);
// }

// function* colourBuilder() {
//   for (let i = 0; i < 150; i++) {
//     yield `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
//   }
// }

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
}

const res = getRandomHex();
console.log(res);
console.log(
  Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, "0")
);
