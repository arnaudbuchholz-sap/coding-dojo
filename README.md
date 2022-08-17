# coding-dojo

The purpose of this dojo is to practice [TDD](http://agiledata.org/essays/tdd.html) and [pair programming](https://developerexperience.io/practices/pair-programming).

## Context of the dojo

We focus on generating prime numbers from an integer.
Out of the box, the project is capable of generating primes for numbers up to 3 (yeah!).
Your goal is to improve this.

### Setting up

* Clone the repository
* `npm install`

### Running

* `npm start`

The prime number generator is a REST api available from http://localhost:8080/prime/3 (to get primes of number 3).

### Testing

The project comes with unit tests developped with [mocha](https://www.npmjs.com/package/mocha).
Running the tests is done with `npm test`.

A watch mode is available (to run the tests automatically after modifying a file) through `npm run test:watch`.

## Exercise 1

Extend the prime number generator to support numbers at least to 200.

**BONUS** *(if you have time)*: Implement a limit in the web service to fail the call if the requested number is greater that the limit.

## Exercise 2

Provided the list of prime numbers returned for X (named Px), if you request the primes of Y with X < Y, we know that the result will contain Px.

Implement a cache that accepts a number and its associated prime numbers.
The interface would look like :

```javascript
const cache = new Cache();
cache.get(1); // undefined
cache.set(4, [1, 2, 3]);
cache.get(4); // [1, 2, 3]
cache.get(3); // [1, 2, 3]
cache.get(2); // [1, 2]
cache.set(5, [1, 2, 3, 5]);
cache.get(5); // [1, 2, 3, 5]
cache.get(6); // undefined
```

And implement the following acceptance criteria:
* Cache read API
  * Provided the cache is initialized with `4` and `[1, 2, 3]` as its prime numbers
    * it returns the primes for `1` *(i.e. `[1]`)*
    * it returns the primes for `2` *(i.e. `[1, 2]`)*
    * it returns the primes for `3` *(i.e. `[1, 2, 3]`)*
    * it returns the primes for `4` *(i.e. `[1, 2, 3]`)*
    * it returns `undefined` if the cache does not know the list of primes for a given number
* Cache write API
  * Provided the cache is empty
    * it accepts a number and its prime numbers
  * Provided the cache is initialized with `4` and `[1, 2, 3]` as its prime numbers
    * it ignores known prime values
    * it accepts bigger values with their prime numbers
    * it increments the list of primes
