// Our map function will take in two arguments:

// An array to map
// A callback function
// The map function will return a new array based on the results of the
// callback function.

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


const words = ["ground", "control", "to", "major", "tom"];
const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];
const animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro',       species: 'dog' },
  { name: 'Hamilton',   species: 'dog' },
  { name: 'Harold',     species: 'fish' },
  { name: 'Ursula',     species: 'cat' },
  { name: 'Jimmy',      species: 'fish' }
];

// let length = lighthouses.map(function(lighthouse) {
//   return lighthouse.length;
// })

// console.log(length);

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
const results2 = map(lighthouses, lighthouse => lighthouse.length);
const results3 = map(animals, animal => animal.name);
// console.log(results1);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, [ 15, 13, 11, 16, 10, 11, 10 ]);
assertArraysEqual(results3, [ 'Fluffykins', 'Caro', 'Hamilton', 'Harold', 'Ursula', 'Jimmy']);