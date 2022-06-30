'use strict';

const firstPrimes = [1, 2, 3];

module.exports = {
  primeGenerator: async function(number) {
    if (firstPrimes.includes(number)) {
      return firstPrimes.slice(0, number);
    }
  }
};
