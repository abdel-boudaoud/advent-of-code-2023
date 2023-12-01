const fs = require("fs");

let text = fs.readFile("day-1/input.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    getDigits(data);
  }
});

let getDigits = (input) => {
  let inputArr = input.split("\n");
  let calibrations = [];

  inputArr.forEach((ele) => {
    let numbers = [];
    for (let i = 0; i < ele.length; i++) {
      if (Number(ele[i])) {
        numbers.push(ele[i]);
      }
    }
    calibrations.push(numbers);
  });

  let answer = calibrations
    .map((x) => {
      return parseInt(x[0] + x[x.length - 1], 10);
    })
    .reduce((a, b) => a + b, 0);
};
