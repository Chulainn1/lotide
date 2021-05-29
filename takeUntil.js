// It will take in two parameters:

// The array to work with
// The callback (which Lodash calls "predicate")

// The function will return a "slice of the array with elements taken from the
// beginning." It should keep going until the callback/predicate returns a
// truthy value.

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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const takeUntil = function(array, callback) {
  const result = [];
  for (let item of array) {
    if (callback(item)) {
      break;
    } else {
      result.push(item);
    }
  }
  return result;
};
   

const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);
assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]);

console.log('---');

const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
