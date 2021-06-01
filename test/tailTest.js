const { assert }  = require("chai");
const tail = require("../tail");

describe("#tail", () => {
  const test = ["1", "2", "3"];
  it("returns 3 for test.length", () => {
    assert.strictEqual((test.length), 3);
  });
  it("returns 2 for tail(test).length", () => {
    assert.strictEqual(tail(test).length, 2);
  });
  it("returns ['2', '3'] for tail(test)", () => {
    assert.deepEqual(tail(test), ['2', '3']);
  });
});
