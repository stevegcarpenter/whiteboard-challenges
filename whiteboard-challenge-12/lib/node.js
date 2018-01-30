'use strict';

module.exports = class {
  constructor(val=null) {
    if (!val && val !== 0)
      throw new Error('Error: Val must be a valid piece of data');
    this.val = val;
    this.next = null;
  }
};
