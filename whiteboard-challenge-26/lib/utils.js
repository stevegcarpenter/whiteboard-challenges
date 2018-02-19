'use strict';

let utils = module.exports = {};

utils.map = (arr, cb) => {
  if (!(arr instanceof Array)) throw new TypeError(`${arr} is not an Array`);
  if (typeof cb !== 'function') throw new TypeError(`${cb} is not a function`);

  let newArr = [];
  for (let i in arr) {
    newArr.push(cb(arr[i], i, arr));
  }

  return newArr;
};

utils.filter = (arr, cb) => {
  if (!(arr instanceof Array)) throw new TypeError(`${arr} is not an Array`);
  if (typeof cb !== 'function') throw new TypeError(`${cb} is not a function`);

  let newArr = [];
  for (let i in arr) {
    let result = cb(arr[i], i, arr);
    if (result) newArr.push(arr[i]);
  }

  return newArr;
};

utils.reduce = (arr, cb, init) => {
  if (!(arr instanceof Array)) throw new TypeError(`${arr} is not an Array`);
  if (typeof cb !== 'function') throw new TypeError(`${cb} is not a function`);

  let acc = init ? init : arr[0];
  for (let i = 1; i < arr.length; i++) {
    acc = cb(acc, arr[i], i, arr);
  }

  return acc;
};
