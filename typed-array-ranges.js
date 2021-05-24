const getMax = require("./get-max");
const getMin = require("./get-min");

const getRange = array => {
  if (typeof array !== "string" && array.constructor) array = array.constructor.name;
  return [getMin(array), getMax(array)];
};

module.exports = { getMax, getMin, getRange };
