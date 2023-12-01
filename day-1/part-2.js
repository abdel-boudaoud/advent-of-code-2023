const fs = require("fs");
let numbersText = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

let getDigits = (input) => {
  let inputArr = input.trim().split("\n");

  let calibrations = [];

  inputArr.forEach((ele) => {
    let numbers = Array();
    for (let i = 0; i < ele.length; i++) {
      if (Number(ele[i])) {
        numbers[i] = ele[i];
      }
    }

    numbersText.forEach((number) => {
      if (ele.match(number)) {
        let matches = [...ele.matchAll(new RegExp(number, "g"))];
        matches.forEach((match) => {
          numbers[match.index] = `${numbersText.indexOf(number)}`;
        });
      }
    });

    calibrations.push(numbers.flat());
  });

  let answer = calibrations
    .map((arr) => {
      return parseInt(`${arr[0]}${arr[arr.length - 1]}`);
    })
    .reduce((a, b) => a + b, 0);
};

fs.readFile("day-1/input.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    getDigits(data);
  }
});
