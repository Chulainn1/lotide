// return all the indices (zero-based positions) in the string where each 
// character is found.

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

const letterPositions = function(sentence) {
  let letters = sentence.split('');
  let results = {};
  for (let i = 0; i < letters.length; i++) {
    // console.log(i); // prints the index
    if (!results.hasOwnProperty(letters[i])) {
      results[letters[i]] = [i]; // this is adding a key - [letters[i]] and a value - [i] to the results obj 
    } else {
      results[letters[i]].push(i);
    }
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("lighthouse in the house").e, [9, 16, 22]);