const THEORETICAL_MAXIMUMS = {
  Int8Array: 127, // Math.pow(2, 8 - 1) - 1
  Uint8Array: 255, // Math.pow(2, 8) - 1
  Uint8ClampedArray: 255, // Math.pow(2, 8) - 1
  Int16Array: 32767, // Math.pow(2, 16 - 1) - 1
  Uint16Array: 65535, // Math.pow(2, 16) - 1
  Int32Array: 2147483647, // Math.pow(2, 32 - 1) - 1
  Uint32Array: 4294967295, // Math.pow(2, 32) - 1
  Float32Array: 3.4e38, // 3.4 * Math.pow(10, 38)
  Float64Array: 1.8 * Math.pow(10, 308) === Infinity ? undefined : 1.8 * Math.pow(10, 308),
  BigInt64Array: 9223372036854776000, // Math.pow(2, 64 - 1) - 1
  BigUint64Array: 18446744073709552000, // Math.pow(2, 64) - 1
};

const getMax = array => {
  if (typeof array !== "string" && array.constructor) array = array.constructor.name;
  return THEORETICAL_MAXIMUMS[array];
};

module.exports = getMax;
