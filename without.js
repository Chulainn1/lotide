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
  // let result = eqArrays(array1,array2);
  if (eqArrays(array1,array2)) {
    console.log(`✅✅✅ array1: [${array1}] DOES match array2: [${array2}].`);
  } else {
    console.log(`🛑🛑🛑 array1: [${array1}] does NOT match array2: [${array2}].`);
  }

};

const without = function (source, itemsToRemove) {
  let finalArray = [];
  for (let i of source) {
      if (!itemsToRemove.includes(i)) {
        finalArray.push(i)
    }
  }
  console.log(finalArray);
};


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


// without([1, 2, 3], [1]) // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

