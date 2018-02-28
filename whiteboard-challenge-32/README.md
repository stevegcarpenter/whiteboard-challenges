# Whiteboard Challenge 32

The fibonacci series is an ordering of numbers where each number is the sum of the preceeding two.

Write two functions to print out the nth entry in the fibonacci series, recursively and iteratively
ex: `[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]` forms the first ten entries of the fibonacci series

ex: `fib(4) === 3`

Write at least four tests for each function (they will generally cover the same IO for each function)

## Recursive
The recursive Fibonacci solution can be optimized, but this lab was supposed to
allow students to write it in the BigO N exponential timing to demonstrate how
timing can quickly be blown up for what appear to be simple calculations.

## Iterative
The iterative solution to this problem builds up a cache of values from the bottom
and reuses those values so any one fib(n) value is only ever calculated once. This
is a very popular type of algrorithmic strategy known as Dynamic Programming and the
best solution possible for determining fib(n).
