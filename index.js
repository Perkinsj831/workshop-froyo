let input = prompt("Please enter a list of comma-separated froyo flavors");

let froyoFlavors = input.split(",");

//console.log(froyoFlavors);

for (f = 0; f < froyoFlavors.length; f++) {
  console.log(froyoFlavors[f]);
}

function countFlavors(froyoFlavors) {
  const flavorNums = {};

  for (const num of froyoFlavors) {
    flavorNums[num] = flavorNums[num] ? flavorNums[num] + 1 : 1;
  }

  return flavorNums;
}

console.table(countFlavors(froyoFlavors));
