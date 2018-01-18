'use strict';

const solution = module.exports = {};

solution.findIntersections = (a, b) => {
  var lut = {};
  a.map(e => lut[e] = true);
  return b.filter(e => lut[e]);
};
