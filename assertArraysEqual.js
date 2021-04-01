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
}

const assertArraysEqual = function(array1, array2) {
  if (array1 === array2) {
    console.log('✅✅✅ The arrays you passed in ARE the same');
  } else {
    console.log('🛑🛑🛑 The arrays you passed in are NOT the same');
  }

}

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), true) // => false



////console.log(eqArrays([1, 2, 3], [1, 2, 3]));


