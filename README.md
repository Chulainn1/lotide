# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @leammurphy/lotide`

**Require it:**

`const _ = require('@leammurphy/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: Assert whether two arrays are equal

* `assertEqual`: Asserts primitive values are equal

* `countLetters`: Returns an object tallying the occurances of characters appearing in the passed in string

* `countOnly`: Take in an items array and an object of items to count, returns an object of counts for those items

* `eqArrays`: Compares whether two arrays contain the same data

* `eqObjects`: Compares whether two objects contain the same data

* `findKey`: Takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value.

* `findKeyByValue`: Takes in an object and a value, scans the object and returns the first key containing the given vale.

* `flatten`: Returns a single array from an array containing nested arrays

* `head`: Returns the first element of an array

* `letterPositions`: Takes in a string and returns an object containing all the indices (zero-based positions) in the string where each character is found

* `map`: Takes in an array and a callback. Returns a new array based on the results of the callback. function.
* `middle`: Takes in an array and return the middle-most element(s) of the given array

* `tail`: Returns everything except the head of an array

* `takeUntil`: Returns a "slice of the array with elements taken from the beginning." It should keep going until the callback returns a truthy value.

* `without`: Returns a new array containing desired elements, given a source array and an "to remove" array 


