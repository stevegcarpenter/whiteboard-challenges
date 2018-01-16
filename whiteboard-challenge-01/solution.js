'use strict';

function minMaxAvg(arr) {
  return {
    'min': Math.min.apply(null, arr),
    'max': Math.max.apply(null, arr),
    'avg': arr.reduce((acc, cur) => acc + cur) / arr.length,
  };
}
