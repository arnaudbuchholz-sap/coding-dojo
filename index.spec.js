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
    expect(response.statusCode).to.be.eq(200);
    const result = JSON.parse(response.toString());
    expect(result).to.deep.equal([1]);
  });

  it('handles /prime/1 and /prime/3 sent in parallel', async () => {
    const [response1, response2] = await Promise.all([
      mocked.request('GET', '/prime/1'),
      mocked.request('GET', '/prime/3')
    ]);
    expect(response1.statusCode).to.be.eq(200);
    const result1 = JSON.parse(response1.toString());
    expect(result1).to.deep.equal([1]);
    expect(response2.statusCode).to.be.eq(200);
    const result2 = JSON.parse(response2.toString());
    expect(result2).to.deep.equal([1, 2, 3]);
  });
});
