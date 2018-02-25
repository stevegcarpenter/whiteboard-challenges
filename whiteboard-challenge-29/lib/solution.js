// sort anagrams alphabetically
module.exports = (wordsArr) => {
  if (!wordsArr || !(wordsArr instanceof Array))
    throw new TypeError('wordsArr is invalid');

  let anagrams = {};

  // First, add all anagrams into an object based off their key value
  wordsArr.map(word => {
    if (typeof word !== 'string')
      throw new TypeError(`${word} is not a string`);

    let key = word.trim().toLowerCase().split('').sort().join('');

    // Store anagrams in an array
    if (!anagrams[key])
      anagrams[key] = [];

    anagrams[key].push(word.trim().toLowerCase());
  });

  // Sort the keys and add all the anagrams back into the results array
  let results = [];
  Object.keys(anagrams).sort().map(key => {
    results = results.concat(...anagrams[key].sort());
  });

  return results;
};
