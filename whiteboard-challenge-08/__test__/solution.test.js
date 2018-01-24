'use strict';

const listIntersection = require('../lib/solution');
const Node = require('../lib/nd');

describe('Solution Module', () => {
  describe('#listIntersection', () => {
    it('should throw an error if either list a or list b is falsey', () => {
      expect(() => listIntersection(new Node(10), null)).toThrow('Ooops');
      expect(() => listIntersection(null, new Node(10))).toThrow('Ooops');
    });

    it('should return null if there are no interections in the list', () => {
      // write tests here
      let lista = new Node(3);
      let n = new Node(2);
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
      
      expect(listIntersection(lista, listb)).toBe(null);
    });

    it('should return null if there are no interections in the list', () => {
      // write tests here
      let lista = new Node(3);
      let n = new Node(2);
      n.next = lista;
      lista = n;
      n = new Node(1);
      n.next = lista;
      lista = n;

      let listb = new Node(3);
      n = new Node(9);
      n.next = listb;
      listb = n;
      n = new Node(8);
      n.next = listb;
      listb = n;

      let intersection = listIntersection(lista, listb);
      expect(intersection.value).toBe(4);
    });
  });
});
