'use strict';

const solution = module.exports = {};

solution.findIntersections = (a, b) => {
  var lut = {};
  if (!Array.isArray(a) || !Array.isArray(b)) return [];
  a.map(e => lut[e] = true);
  return b.filter(e => lut[e]);
};
