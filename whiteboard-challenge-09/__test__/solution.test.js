'use strict';

const findNthFromEnd = require('../lib/solution');
const Node = require('../lib/nd');

describe('Solution Module', () => {
  describe('#findNthFromEnd', () => {
    // write tests here
    let lista = new Node(6);
    let n = new Node(5);
    n.next = lista;
    lista = n;
    n = new Node(4);
    n.next = lista;
    lista = n;
    n = new Node(3);
    n.next = lista;
    lista = n;
    n = new Node(2);
    n.next = lista;
    lista = n;
    n = new Node(1);
    n.next = lista;
    lista = n;

    let listb = new Node(4);
    n = new Node(9);
    n.next = listb;
    listb = n;
    n = new Node(8);
    n.next = listb;
    listb = n;
    listb.next.next.next = {value: 99, next: null};

    it('should throw an error if the list head is falsey', () => {
      expect(() => findNthFromEnd(null, 5)).toThrow('Ooops');
      expect(() => findNthFromEnd(undefined, 5)).toThrow('Ooops');
      expect(() => findNthFromEnd(NaN, 5)).toThrow('Ooops');
      expect(() => findNthFromEnd(0, 5)).toThrow('Ooops');
    });

    it('should throw an error if n > length of the list', () => {
      expect(() => findNthFromEnd(lista, 10).toThrow('Ooops'));
    });

    it('should throw an error if n < 0', () => {
      expect(() => findNthFromEnd(lista, -1)).toThrow('Ooops');
    });

    it('should throw an error if any node in the list is not of type Node', () => {
      expect(() => findNthFromEnd(listb, 3)).toThrow('Ooops');
    });

    it('should return the correct node in the link list given an offset n', () => {
      // list a is head = [ 1 ]->[ 2 ]->[ 3 ]->[ 4 ]->[ 5 ]->[ 6 ]->null
      // verify the function works on all nodes
      expect(findNthFromEnd(lista, 0).value).toBe(6);
      expect(findNthFromEnd(lista, 1).value).toBe(5);
      expect(findNthFromEnd(lista, 2).value).toBe(4);
      expect(findNthFromEnd(lista, 3).value).toBe(3);
      expect(findNthFromEnd(lista, 4).value).toBe(2);
      expect(findNthFromEnd(lista, 5).value).toBe(1);
    });
  });
});
