var chai = require('chai');
var expect = chai.expect;
var locate = require('../index.js');

describe('locate', function () {
  it('should be a function', function () {
    expect(locate).to.be.a('function');
  });
});