'use strict';

const { expect } = require('chai');
const { primeGenerator } = require('./prime-generator');

describe('prime', () => {
  it('returns at least 1', () => {
    const result = primeGenerator(1);
    expect(result.length).to.be.greaterThan(0);
    expect(result[0]).to.be.eq(1);
  });
});
