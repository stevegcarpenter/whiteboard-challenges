# Problem Domain

Given two arrays, write a function to compute their intersection

example: Given `nums1 = [1, 2, 2, 1]`, `nums2 = [2, 2]`, return `[2]`.

Write at least four tests for this function

your tests should cover basic (expected) functionality
your tests should consider edge cases for your function (ex: will your function still operate on an array of floating point integers?)

# Tests
- Validate the arguments for each input array are of instances of Arrays
- Validate an empty array is returned if either of the input arrays are empty
- Validate an empty array should be returned if either of the input args are not instances of an Array
- Validate null is returned if any non numbers are contained within either of the input arrays

# Pseudo Solution
- Validate all inputs and handle bad input appropriately
- Iterate through one of the arrays while adding each item to an object as present
- Iterate through the second array filtering out any items that weren't found in the lookup table
- Return the result which is only items intersecting in both arrays
