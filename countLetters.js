// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
  
// };
// assertEqual("Lighthouse Labs", "Lighthouse Labs");
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(1, 2);


// const countLetters = function(string) {
//   let letters = string.split('');
//   // console.log(letters);
//   let newObj = {}; 
//   for (let letter of letters) {
//     // console.log(letter);
//     // if (newObj.hasOwnProperty(letter)) {
//     //   newObj[letter] += 1;
//     // } else {
//     //   newObj[letter] = 1;
//     // }
//     newObj.hasOwnProperty(letter) ? newObj[letter] += 1 : newObj[letter] = 1;
//   }
//   return newObj;
// }

// console.log(countLetters("LHL"));


const countLetters = function(string) {
  let letters = string.split('');
  //console.log(letters);
  let newObj = {};
  for (let letter of letters) { 
    console.log(letter);
    newObj.hasOwnProperty(letter) ? newObj[letter] += 1 : newObj[letter] = 1;
  }
  return newObj;
};

console.log(countLetters("LHL"));




























// const countLetters = function(string) {
//   let indiv = string.split('');
//   let letters = [];
//   let count = 1
//    for (let letter = 0; letter < indiv.length; letter++) {
//     if(indiv[letter] === indiv[letter+ 1]) {
//       count ++;
//     } else {
//       let value = `${count}${indiv[letter]}`;
//       letters = [...letters, value];
//       count = 1;
//     }
//    }
//    return letters;
// }

// console.log(countLetters("LHL"));

// // // result["key"] = "value"
