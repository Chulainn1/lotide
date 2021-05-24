const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  
};
  
  
const tail = function(arr) {
  return arr.slice(1);
};

const test = ["1", "2", "3"];
const result = tail(test);

//console.log(tail(test));

assertEqual((result.length), 2);
assertEqual(result[0],"2");
assertEqual(result[1],"3");

assertEqual(test.length, 3);