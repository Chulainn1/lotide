const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr2.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1"};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

const cd2 = { c: "1", d: ["2", 3, 4] };


const eqObjects = function(object1, object2) {
  const o1 = Object.keys(object1);
  const o2 = Object.keys(object2);
  // console.log(o1);
  // console.log(o2);
  if (o1.length !== o2.length) {
    return false;
  }
  for (let theKey of o1) {
    // console.log(theKey);
    // console.log(object1[theKey]);
    // console.log(object2[theKey]);
    if (Array.isArray(object1[theKey])) {
      // console.log("hello");
      const results = eqArrays(object1[theKey], object2[theKey]);
      if (results === false) {
        return false;
      }
    } else if (object1[theKey] !== object2[theKey]) {
      return false;
    }
    // console.log(Array.isArray(object1[theKey]));
    
  }
  return true;
};
  











assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);

