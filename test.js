var expect = require('chai').expect;
var median = require('./index.js');

describe('Tests for checking median', function () {
  it('should return an median of odd length of numbers', function () {
    expect(median([3, 13, 7, 5, 21])).to.be.eql(7);
  });

  it('should return an median of even length of numbers', function () {
    expect(median([23, 23, 40, 23])).to.be.eql(23);
  });
});
