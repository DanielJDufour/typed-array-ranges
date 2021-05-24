const THEORETICAL_MINIMUMS = {
  Int8Array: -128, // Math.pow(-2, 8 - 1)
  Uint8Array: 0,
  Uint8ClampedArray: 0,
  Int16Array: -32768, // Math.pow(-2, 16 - 1)
  Uint16Array: 0,
  Int32Array: -2147483648, // Math.pow(-2, 32 - 1)
  Uint32Array: 0,
  // skipping Float32Array and Float64Array because it appears to be platform dependent
  BigInt64Array: -9223372036854776000, // Math.pow(-2, 63)
  BigUint64Array: 0,
};

const getMin = array => {
  if (typeof array !== "string" && array.constructor) array = array.constructor.name;
  return THEORETICAL_MINIMUMS[array];
};

module.exports = getMin;
