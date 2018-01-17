'use strict';

const solution = require('../solution');

let trainA = {
  'value': 3,
  'next': {
    'value': 2,
    'next': {
      'value': 1,
      'next': null,
    },
  }, 
};

let trainB = {
  'value': 5,
  'next': {
    'value': 0,
    'next': {
      'value': 5,
      'next': {
        'value': 5,
        'next': null,
      },
    },
  }, 
};

let trainC = {
  'value': 5,
  'next': {
    'value': -1,
    'next': {
      'value': 5,
      'next': {
        'value': 5,
        'next': null,
      },
    },
  }, 
};

let trainD = {
  'value': 5,
  'next': {
    'value': 25,
    'blahblah': 'steve is awesome',
    'foo': 10,
    'bar': 1,
    'next': {
      'value': 5,
      'next': {
        'value': 5,
        'next': null,
      },
    },
  }, 
};

let trainE = {
  'value': 5,
  'next': {
    'foobarbinbang': 25,
    'next': {
      'value': 5,
      'next': {
        'value': 5,
        'next': null,
      },
    },
  }, 
};

let trainF = {
  'value': 5,
  'next': {
    'value': '25',
    'next': {
      'value': 5,
      'next': {
        'value': 5,
        'next': null,
      },
    },
  }, 
};

describe('Solution Module', () => {
  describe('#traverse', () => {
    it('should traverse the train and calculate the total number of passengers.', () => {
      expect(solution.traverse(trainA)).toEqual(6);
      expect(solution.traverse(trainB)).toEqual(15);
    });

    it('should return null if any negative numbers are present for passenger counts', () => {
      expect(solution.traverse(trainC)).toEqual(null);
    });

    it('should return null in the event a non true argument being passed in for engine', () => {
      expect(solution.traverse(null)).toEqual(null);
      expect(solution.traverse(undefined)).toEqual(null);
      expect(solution.traverse(0)).toEqual(null);
    });

    it('should return null in the event that the engine arg is not an object', () => {
      expect(solution.traverse('')).toEqual(null);
      expect(solution.traverse(1)).toEqual(null);
    });

    it('should return null if any of the train car objects has < or > 2 properties', () => {
      expect(solution.traverse(trainD)).toEqual(null);
    });

    it('should return null if any train car object has an incorrectly named property', () => {
      expect(solution.traverse(trainE)).toEqual(null);
    });

    it('should return null if any of the values are non numbers', () => {
      expect(solution.traverse(trainF)).toEqual(null);
    });
  });
});
