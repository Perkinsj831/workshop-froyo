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

// ---- Travis Result ---- //

// const order = prompt("Enter a list of flavors seperated by commas")
// const orderArray = order.split(",")

// console.log(orderArray)

// ---Now we have an array of flavors

// ---{
//   ---key:Value,
//   ---vanilla: 3
// ---}

// --- need to see values in the array and add to our object

// let flavorObj = {}

// ---flavorObj.vanilla = "value" --- dot notation-- setting key as vanilla 
// ---flavorObj["vanilla"] = 7 --- bracket notation (objects)



// ----- dot notation works when you know the value, doesn't work with VARIABLE(changing) Key values 
// ----- if you KNOW the key, then dot notation is prefeered

// ---- Last index = length - 1.. will go through array one element at a time
// for (let i = 0; i < orderArray.length; i++) {
//  let currentFlavor = orderArray[i].trim().tolowerCase()

// --- flavorObj[currentFlavor] = 1 ---- setting it to 1
// --- flavorObj[currentFlavor] += 1 ---- im ADDING 1 to whats already there
// }

// ---- If i havent seen it, i need to add it to the object
// if (flavorObj[currentFlavor === undefined]){
//  flavorObj[currentFlavor] = 1
// } else {
//  flavorObj[currentFlavor] += 1
// } return flavorObj

// ---- && - Both left and right need to be true for the whole thing to be true
// ---- || - ONLY one side needs to be true for the whole thing to be true

// 