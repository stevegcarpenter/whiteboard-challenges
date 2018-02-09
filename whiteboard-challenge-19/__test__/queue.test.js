'use strict';

const Queue = require('../lib/queue');

describe('Queue Module', () => {
  describe('#constructor', () => {
    it('should return back an instance of a Queue', () => {
      expect(new Queue(100)).toBeInstanceOf(Queue);
    });

    it('should return back a valid Queue object with appropriate values set', () => {
      expect(new Queue(10)).toEqual({max: 10, length: 0, front: null, back: null});
    });

    it('should throw an error if an invalid max length was given', () => {
      expect(() => new Queue(0)).toThrow('Error: Max length must be a valid non-zero number');
      expect(() => new Queue({})).toThrow('Error: Max length must be a valid non-zero number');
      expect(() => new Queue(-10)).toThrow('Error: Max length must be a valid non-zero number');
      expect(() => new Queue(null)).toThrow('Error: Max length must be a valid non-zero number');
    });

    it('should set the default max length of 1024 if none was provided', () => {
      expect((new Queue()).max).toBe(1024);
      expect((new Queue(undefined)).max).toBe(1024);
    });
  });

  describe('#enqueue', () => {
    beforeEach(() => this.queue = new Queue());

    it('should set the front and back to the first item enqueued', () => {
      this.queue.enqueue(100);
      expect(this.queue.front.value).toBe(100);
      expect(this.queue.back.value).toBe(100);
    });

    it('should have a length of 20', () => {
      [...Array(20)].map((e, i) => this.queue.enqueue(~~(Math.random() * i)));
      expect(this.queue.length).toEqual(20);
    });

    it('throw an error when max length is met', () => {
      expect(() => {
        [...Array(1025)].map((e, i) => this.queue.enqueue(~~(Math.random() * i)));
      }).toThrow('Error: Queue is at max length');
    });

    it('should throw an Error when a falsey non-zero number is enqueued', () => {
      expect(() => this.queue.enqueue(null)).toThrow('Error: Value must be valid');
      expect(() => this.queue.enqueue(undefined)).toThrow('Error: Value must be valid');
    });
  });

  describe('#dequeue', () => {
    beforeEach(() => this.queue = new Queue());

    it('should be equal an empty queue if all items are dequeued from the queue', () => {
      [1, 2, 3, 4, 5].map(e => this.queue.enqueue(e));
      [...Array(5)].map(() => this.queue.dequeue());
      expect(this.queue).toEqual(new Queue());
    });

    it('should throw an Error if an attempt is made to remove an item from an empty queue', () => {
      expect(() => this.queue.dequeue()).toThrow('Error: Queue is empty');
    });

    it('should return back the correct dequeued value', () => {
      [1, 2, 3].map((e) => this.queue.enqueue(e));
      expect(this.queue.dequeue()).toBe(1);
    });
  });
});
