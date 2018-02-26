'use strict';

const solution = module.exports = {};

solution.findIntersections = (a, b) => {
  var lut = {};
  if (!Array.isArray(a) || !Array.isArray(b)) return [];
  if (!a.every(e => typeof e === 'number') || !b.every(e => typeof e === 'number')) return null;
  a.map(e => lut[e] = true);
  return b.filter(e => lut[e]);
};
