'use strict';

module.exports = (head) => {
  if (!head) throw new Error('Ooops');
  for (let itr = head, itr2 = head.next, c = 0; itr2; itr2 = itr2.next, c++) {
    if (c % 2) itr = itr.next;
    if (itr === itr2) {
      return true;
    }
  }
  return false;
};
