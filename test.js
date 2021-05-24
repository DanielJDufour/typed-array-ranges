const test = require("flug");
const { getMax, getMin, getRange } = require("./typed-array-ranges");

// mins
test("get minimum for a Uint8Array", ({ eq }) => {
  const nums = Uint8Array.from([1]);
  eq(getMin(nums), 0);
});

// maxes
test("get maximum for a Uint8Array", ({ eq }) => {
  const nums = Uint8Array.from([1]);
  eq(getMax(nums), 255);
});

// ranges
test("get range for a Uint8Array", ({ eq }) => {
  const nums = Uint8Array.from([1]);
  eq(getRange(nums), [0, 255]);
});

test("get range for an Int8Array", ({ eq }) => {
  const nums = Int8Array.from([1]);
  eq(getRange(nums), [-128, 127]);
});
