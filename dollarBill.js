function tickets(peopleInLine) {
  let cash = {
    25: 0,
    50: 0,
  };

  const setTicket = (bill) => {
    if (bill === 25) {
      cash[25]++;
      console.log(cash);
      return true;
    }

    if (bill === 50 && cash[25] > 0) {
      cash[25]--;
      cash[50]++;
      console.log(cash);

      return true;
    }

    if (bill === 100) {
      if (cash[50] > 0 && cash[25] > 0) {
        cash[50]--;
        cash[25]--;
        console.log(cash);

        return true;
      }

      if (cash[25] > 2) {
        cash[25] -= 3;
        console.log(cash);

        return true;
      }
    }

    return false;
  };

  return peopleInLine.every((item) => setTicket(item)) ? "YES" : "NO";
}

// function tickets(peopleInLine) {
//   var bills = [0, 0, 0];
//   for (var i = 0; i < peopleInLine.length; i++) {
//     switch (peopleInLine[i]) {
//       case 25:
//         bills[0]++;
//         break;

//       case 50:
//         bills[0]--;
//         bills[1]++;
//         break;

//       case 100:
//         bills[1] ? bills[1]-- : (bills[0] -= 2);
//         bills[0]--;
//         break;
//     }

//     if (bills[0] < 0) {
//       return "NO";
//     }
//   }

//   return "YES";
// }

const res = tickets([25, 25, 50, 100, 100, 25, 50, 100]);
console.log(res);
