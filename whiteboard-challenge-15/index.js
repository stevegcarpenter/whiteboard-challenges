'use strict';

const KTree = require('./lib/kary');

// console.log('Creating ktree.');
// let t = new KTree();
// console.dir(JSON.stringify(t));
//
// console.log('Inserting 1');
// t.insert(1);
// console.dir(JSON.stringify(t));
//
// console.log('Inserting 2 & 3');
// t.insert(2, 1);
// t.insert(4, 1);
// t.insert(2, 4);
// t.insert(3, 2);
// console.dir(JSON.stringify(t));
//
// t.breadthFirst(e => console.log(e.value + ' '));
//
// console.log('Snipping 2');
// t.removeByVal(2);
// console.dir(JSON.stringify(t));

let t = new KTree();
t.insert(1);
t.insert(2, 1);
t.insert(3, 2);
t.insert(4, 2);
t.insert(5, 2);
console.log(JSON.stringify(t));

