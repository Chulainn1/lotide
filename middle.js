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




  } else if (arr.length % 2 == 0) { //even
    arr = [arr[Math.floor(arr.length / 2) - 1], arr[Math.floor(arr.length / 2)]];
    console.log(arr);




  } else if (arr.length % 2 != 0) {  //odd
    arr = arr[Math.floor(arr.length / 2)];
    middleArray.push(arr);
    return middleArray;
  }
}

// middle([1]) // => []
// middle([1, 2]) // => []
// middle([1, 2, 3]) // => [2]
test = middle([1, 2, 3, 4, 5])
assertArraysEqual(test, [3]) // => [3]
// middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

// I need to explain this for myself. 
// 1st if stament checks to see if the length of the array is <= 2, if it is
// return an empty array.
// 2nd if statement is checking if the length is an even number, if it is
// it will divide the length by 2 using Math.floor and subtracting 1 to get you
// the "first" middle element. Without subtracting 1 you get the "second" middle
// element. 
// 3rd if statement checks if the length of the array is odd, if it is divide
// the length by 2 while using Math.floor to return the largest integer of
