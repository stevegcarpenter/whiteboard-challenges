# Whiteboard Challenge 03

## traverse
You're the junior conductor on a commuter train, and have been asked by the
senior conductor to do a head count of passengers on the train.

Write a function const traverse = (engine) => {... which takes the engine as a
starting location. Travel from the engine to the caboose, and console.log the
number of passengers in each car as your progress. Each car, including the
engine will have the following signature: js { <engine> value: 2, next: {
<next car> value: 16, next: { <next car> } }}}
