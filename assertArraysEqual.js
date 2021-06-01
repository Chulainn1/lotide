const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  let result = eqArrays(array1,array2);
  if (result === true) {
    console.log(`✅✅✅ ${array1} DOES match ${array2}.`);
  } else {
    console.log(`🛑🛑🛑 ${array1} does NOT match ${array2}.`);
  }

};


// assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
// assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); // => false

module.exports = assertArraysEqual;