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
  if (result) {
    console.log('✅✅✅ The arrays you passed in ARE the same');
  } else {
    console.log('🛑🛑🛑 The arrays you passed in are NOT the same');
  }

};

const middle = function(arr) {
  let middleArray = [];
  if (arr.length <= 2) {
    console.log([]);




  } else if (arr.length % 2 == 0) {
    arr = [arr[Math.ceil(arr.length / 2) -1], arr[Math.ceil(arr.length / 2)]];
    console.log(arr);




  } else if (arr.length %2 != 0) {
    arr = arr[Math.ceil(arr.length / 2) -1];
    middleArray.push(arr);
    console.log(middleArray);
  }
}

middle([1]) // => []
middle([1, 2]) // => []
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

