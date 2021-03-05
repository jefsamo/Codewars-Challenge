function beadSort(sequence) {
  /* Let's ensure our sequence has only Positive Integers */
  if (sequence.some((integer) => integer < 0)) {
    throw RangeError("Sequence must be a list of Positive integers Only!");
  }

  const sequenceLength = sequence.length;
  const max = Math.max(...sequence);
  console.log(max);
  // Set initial Grid
  const grid = sequence.map((number) => {
    const maxArr = new Array(max);

    for (let i = 0; i < number; i++) {
      maxArr[i] = "*";
    }
    console.log(maxArr);

    return maxArr;
  });

  // Drop the Beads!
  for (let col = 0; col < max; col++) {
    let beadsCount = 0;

    for (let row = 0; row < sequenceLength; row++) {
      if (grid[row][col] === "*") {
        beadsCount++;
      }
    }

    for (let row = sequenceLength - 1; row > -1; row--) {
      if (beadsCount) {
        grid[row][col] = "*";
        beadsCount--;
      } else {
        grid[row][col] = undefined;
      }
    }
  }

  /* Finally, let's turn our Bead rows into their Respective Numbers */
  const sortedSequence = grid.map((beadArray) => {
    const beadsArray = beadArray.filter((bead) => bead === "*");

    return beadsArray.length;
  });

  return sortedSequence;
}

/**
 * Implementation of Bead Sort
 */
const array = [5, 4, 3, 2, 1];
// Before Sort
console.log("\n- Before Sort | Implementation of Bead Sort -");
console.log(array);
// After Sort
console.log("- After Sort | Implementation of Bead Sort -");
console.log(beadSort(array));
console.log("\n");
