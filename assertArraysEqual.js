const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  let result = eqArrays(array1,array2);
  if (result === true) {
    console.log(`✅✅✅ ${array1} DOES match ${array2}.`);
  } else {
    console.log(`🛑🛑🛑 ${array1} does NOT match ${array2}.`);
  }

};
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); // => false

// console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);