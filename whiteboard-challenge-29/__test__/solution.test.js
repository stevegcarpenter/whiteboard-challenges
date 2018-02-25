require('jest');
const sortAnagrams = require('../lib/solution');

describe('sortAnagrams Tests', () => {
  describe('Valid', () => {
    expect(true).toBeTruthy();
  });

  describe('Invalid', () => {
    it('should detect an invalid array argument passed in and throw an Error', () => {
      expect(() => sortAnagrams(null)).toThrow('wordsArr is invalid');
      expect(() => sortAnagrams(undefined)).toThrow('wordsArr is invalid');
      expect(() => sortAnagrams()).toThrow('wordsArr is invalid');
    });
  });
});
