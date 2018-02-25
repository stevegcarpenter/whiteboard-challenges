require('jest');
const sortAnagrams = require('../lib/solution');

describe('sortAnagrams Tests', () => {
  describe('Valid', () => {
    it('should properly sort a simple list of anagrams', () => {
      let wordArr = ['bob', 'cat', 'obb', 'tac', 'car'];
      expect(sortAnagrams(wordArr)).toEqual([ 'car', 'cat', 'tac', 'bob', 'obb' ]);
    });
  });

  describe('Invalid', () => {
    it('should detect an invalid array argument passed in and throw an Error', () => {
      expect(() => sortAnagrams(null)).toThrow('wordsArr is invalid');
      expect(() => sortAnagrams(undefined)).toThrow('wordsArr is invalid');
      expect(() => sortAnagrams()).toThrow('wordsArr is invalid');
    });

    it('should detect when the wordsArr is not an Array and throw an Error', () => {
      expect(() => sortAnagrams({})).toThrow('wordsArr is invalid');
      expect(() => sortAnagrams(1)).toThrow('wordsArr is invalid');
      expect(() => sortAnagrams('foo')).toThrow('wordsArr is invalid');
    });

    it('should throw an Error if any of the items in the array are non-strings', () => {
      let wordArr = [ 'foo', 1, 'bar', 'baz' ];
      expect(() => sortAnagrams(wordArr)).toThrow('1 is not a string');
    });
  });
});
