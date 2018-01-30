'use strict';

const Stack = require('./stack');

module.exports = class {
  constructor(max=1024) {
    // BigO(1) to create a new Queue (2 Stacks)
    if (typeof max !== 'number' || !max || max < 0)
      throw new Error('Error: Max len must be a valid non-zero number');

    this.in = new Stack(max);
    this.out = new Stack(max);
    this.max = max;
    this.len = 0;
  }

  enqueue(val) {
    // BigO(1) to enqueue items to enqueue items
    if (!val && val !== 0)
      throw new Error('Error: Value must be valid');
    if (this.len === this.max)
      throw new Error('Error: Queue is at max len');

    this.in.push(val);
    this.len++;
  }

  dequeue() {
    // BigO(1) to dequeue an item. the operation of moving items
    // from the in stack to the out stack is amortized away since
    // it will happen increasingly rarely the greater the number of
    // items present in the Queue
    if (!this.len)
      throw new Error('Error: Queue is empty');

    // Only ever move items from in stack to out stack when out is
    // empty and a dequeue call is received
    if (!this.out.size)
      while (this.in.size) this.out.push(this.in.pop());

    this.len--;
    return this.out.pop();
  }
};
