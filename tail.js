const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  
};
  
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);
  
const tail = function(arr) {
  return arr.slice(1);
};

const test = ["1", "2", "3"];

console.log(tail(test));

assertEqual(test.length, 3);
