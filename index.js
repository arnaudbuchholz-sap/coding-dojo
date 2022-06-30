'use strict';

const { primeGenerator } = require('./prime-generator');
const { check, serve, log } = require('reserve');

const configuration = {
  port: process.env.PORT || 8080,
  mappings: [{
    match: /\/prime\/(\d+)/,
    custom: async (request, response, number) => {
      const primeNumbers = await primeGenerator(parseInt(number, 10));
      response.writeHead(200, {
        'content-type': 'application/json'
      });
      response.end(JSON.stringify(primeNumbers));
    }
  }]
};

/* istanbul ignore next */
if (require.main === module) {
  check(configuration)
    .then(checkedConfiguration => log(serve(checkedConfiguration)));
} else {
  module.exports = configuration;
}
