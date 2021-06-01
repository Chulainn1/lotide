// const assertArraysEqual = require('../assertArraysEqual');
// const middle = require('../middle');

// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3]
// assertArraysEqual(middle([1]), []) // => []
// assertArraysEqual(middle([1, 2]), []) // => []
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3]

const { assert }  = require("chai");
const middle = require("../middle");

describe("#middle", () => {
  it("returns [3] for middle([1, 2, 3, 4, 5])", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("returns [] for middle([1])", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns [] for middle([1, 2])", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("returns [3, 4] for middle([1, 2, 3, 4, 5, 6])", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});


middle([1, 2, 3, 4, 5, 6]) // => [3, 4]