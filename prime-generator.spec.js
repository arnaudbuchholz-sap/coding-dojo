'use strict';

const { expect } = require('chai');
const { primeGenerator } = require('./prime-generator');

describe('prime', () => {
  it('returns 1 for 1', async () => {
    const result = await primeGenerator(1);
    expect(result).to.deep.equal([1]);
  });

  it('returns 1, 2 for 2', async () => {
    const result = await primeGenerator(2);
    expect(result).to.deep.equal([1, 2]);
  });

  it('returns 1, 2, 3 for 3', async () => {
    const result = await primeGenerator(3);
    expect(result).to.deep.equal([1, 2, 3]);
  });
});
