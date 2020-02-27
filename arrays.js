"use strict";


// 1. printIndices
function printIndices(items) {
  // Replace this with your code
  for (const i in items) {
    console.log(items[i], i);
  }
}


// 2. everyOtherItem
function everyOtherItem(items) {
  // Replace this with your code
  const result = [];

  for (const i in items) {
    if (i % 2 === 0)
      result.push(items[i]);
  }

  console.log(result)
}


// 3. smallestNItems

function smallestNItems(items, n) {
  // Replace this with your code
  let numbers = [items];
  console.log(`numbers = ${numbers}`);

  let numbersSorted = numbers.sort((a, b) => a - b);
  console.log(`numbersSorted = ${numbersSorted}`);

  let slicedNumbers = numbersSorted.slice(0, n);
  console.log(`slicedNumbers = ${slicedNumbers}`);

  let reversedNumbers = slicedNumbers.reverse();
  console.log(`reversedNumbers = ${reversedNumbers}`);

}

