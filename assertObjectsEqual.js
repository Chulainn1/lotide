const eqObjects = function(object1, object2) {
  const o1 = Object.keys(object1);
  const o2 = Object.keys(object2);
  if (o1.length !== o2.length) {
    return false;
  }
  for (let theKey of o1) {
    if (Array.isArray(object1[theKey])) {
      const results = eqObjects(object1[theKey], object2[theKey]);
      if (results === false) {
        return false;
      }
    } else if (object1[theKey] !== object2[theKey]) {
      return false;
    }
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1"};

const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };

const cd2 = { c: "1", d: ["2", 3, 4] };



const assertObjectsEqual = function(ob1, ob2) {
  const inspect = require('util').inspect;
  let result = eqObjects(ob1, ob2);
  if (result === true) {
    console.log(`✅✅✅ ${inspect(ob1)} DOES match ${inspect(ob2)}.`);
  } else {
    console.log(`🛑🛑🛑 ${inspect(ob1)} does NOT match ${inspect(ob2)}.`);
  }

};
assertObjectsEqual(ab, ba); // => true
assertObjectsEqual(cd, cd2); // => false


