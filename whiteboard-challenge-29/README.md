# Problem Domain

Write a method to sort an array of strings so that all the anagrams are next to each other

Note - we can use a hash table to map the sorted version of a word to a list of its anagrams

example:

```
sortAnagrams(['acre', 'act', 'race', 'cat', 'tac', 'care'])
=> ['acre', 'care', 'race', 'act', 'cat', 'tac', ]
```

Once all the words have been grouped into lists by anagram we can put them back into the array.

Write at least four tests for this function

your tests should cover basic (expected) functionality
your tests should consider edge cases for your function (ex: will your function still operate on an array of floating point integers?)
