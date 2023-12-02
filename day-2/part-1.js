const fs = require("fs");

let input = fs.readFileSync("day-2/input.txt", "utf-8");

let games = input
  .trim()
  .split("\n")
  .map((game) => {
    let sets = game.split(":")[1].split(";");
    return sets.map((ts) => {
      return ts.split(", ");
    });
  });

let checkValue = (color, number) => {
  if (color == "red" && parseInt(number) <= 12) {
    return true;
  } else if (color == "green" && parseInt(number) <= 13) {
    return true;
  } else if (color == "blue" && parseInt(number) <= 14) {
    return true;
  } else {
    return false;
  }
};

results = games.map((sets) => {
  return sets.map((set) => {
    return set.map((pulls) => {
      let pull = pulls.trim().split(" ");

      return checkValue(pull[1], pull[0]);
    });
  });
});

const trueIndexes = results.reduce((indices, arr, index) => {
  if (arr.every((subarr) => subarr.every((element) => element))) {
    indices.push(index + 1);
  }
  return indices;
}, []);

let answer = trueIndexes.reduce((a, b) => a + b, 0);

console.log(answer);
