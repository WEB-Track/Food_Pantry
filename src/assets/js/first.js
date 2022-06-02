// set Pickup Dates test
// list months
const monthSet = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
// added date number
const replacementText = document.getElementById("pickup_row");
var d = new Date();
var mon = d.getMonth();
var y = d.getFullYear();
var text = "";
let monReset = 0;

for (let ii = 0; ii < 13; ii++) {
  let monOffset = ii + mon;
  if (monOffset > 11) {
    d.setFullYear(y + 1);
    monReset = 12;
  }
  let i = 15;
  do {
    d.setMonth(monOffset - monReset);
    d.setDate(i);
    switch (d.getDay()) {
      case 3:
        text +=
          '<div class="row justify-content-around text-light bs-txt-bold">' +
          '<p class="col-3 text-center">' +
          monthSet[d.getMonth()] +
          " " +
          d.getDate() +
          ", " +
          d.getFullYear() +
          "</p>" +
          '<p class="col-3 text-center">10 AM - 12 PM</p>' +
          '<p class="col-3 text-center">6 PM - 8 PM</p>' +
          "</div>";
        break;
    }
    i++;
  } while (i < 22);
}
// document.getElementsByid("pick_row").innerHTML = text;
replacementText.innerHTML = text;
