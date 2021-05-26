const flatten = function(arr) {
  let flattened = [];
  for (i of arr) {
    if (Array.isArray(i)) {
      flattened.push(i[0])
      flattened.push(i[1])
    } else {
      flattened.push(i)
    }

  }
  return flattened;
};

console.log(flatten([1, 2, [3, 4]]))
console.log(flatten([1, 2, [3, 4], 5, [6, 7, 8]]))

// const flatten = function (arr) {
//   let flattened = [];
//   // Only change code below this line
//   for (i of arr) {
//     if (Array.isArray(i)) {
//       for (j of arr[i]) {
//         flattened.push(arr[j]);
//     } 
//     } else {
//       flattened.push(i);
//     }
//   }
//   // Only change code above this line
//   return flattened;
// };
// console.log(flatten([1, 2, [3, 4]]))
// console.log(flatten([1, 2, [3, 4], 5, [6, 4 ,5]]))

