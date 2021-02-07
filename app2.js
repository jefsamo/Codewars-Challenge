// function howMany(selectObject) {
//   let numberSelected = 0;
//   for (let i = 0; i < selectObject.options.length; i++) {
//     if (selectObject.options[i].selected) {
//       numberSelected++;
//     }
//   }
//   return numberSelected;
// }

// let btn = document.getElementById("btn");
// btn.addEventListener("click", function () {
//   alert(
//     "Number of options selected: " + howMany(document.selectForm.musicTypes)
//   );
// });

class DateFormatter extends Date {
  getFormattedDate() {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
  }
}

console.log(new DateFormatter().getFormattedDate());
// e
