'use strict';

const Stack = require('./stack');
const SLL = require('./sll');

// dedupe
module.exports = (head) => {
  if (!head) throw new Error('Error: head is falsey');

  let s = new Stack();
  let itr;
  // Push all unique values into the stack
  for (itr = head.next, s.push(head.value); itr; itr = itr.next) {
    if (s.peek() !== itr.value) {
      s.push(itr.value);
    }
  }

  let sll = new SLL();
  // Generate a singly link list from stack
  while (s.size) {
    sll.insertHead(s.pop());
  }

  // Return the head
  return sll.head;
};
