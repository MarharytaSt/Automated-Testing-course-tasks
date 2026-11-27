const { expect } = require('chai');
const { describe, it, beforeEach, afterEach } = require('mocha');
const NumbersValidator = require('../../app/numbers_validator');

describe('isInteger', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  describe('positive tests', () => {
    it('should return true when provided an integer', () => {
      const validationResults = validator.isInteger(5);
      expect(validationResults).to.be.equal(true);
    });
  });

  describe('negative tests', () => {
    it('should return false when provided a decimal number', () => {
      const validationResults = validator.isInteger(5.5);
      expect(validationResults).to.be.equal(false);
    });
    it('should throw an error when provided not a Number value', () => {
      const input = 'five';

      expect(() => validator.isInteger(input))
        .to.throw(`[${input}] is not a number`);
    });
  });
});
