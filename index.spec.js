'use strict';

const { expect } = require('chai');
const { mock } = require('reserve');
const configuration = require('./index');

describe('index', () => {
  let mocked;

  before(async () => {
    mocked = await mock(configuration);
  });

  it('handles /prime/1', async () => {
    const response = await mocked.request('GET', '/prime/1');
    expect(response.headers['content-type']).to.be.eql('application/json');
    expect(response.statusCode).to.be.eql(200);
    const result = JSON.parse(response.toString());
    expect(result.length).to.be.greaterThan(0);
    expect(result[0]).to.be.eq(1);
  });
});
