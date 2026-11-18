const { expect } = require('chai');
const { describe, it, beforeEach, afterEach } = require('mocha');
const NumbersValidator = require('../../app/numbers_validator');

describe('isAllNumbers', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  describe('positive tests', () => {
    it('should return true when all array elements are numbers', () => {
      const validationResults = validator.isAllNumbers([1, 2, 3]);
      expect(validationResults).to.be.equal(true);
    });
    it('should return true when an empty array is provided', () => {
      const validationResults = validator.isAllNumbers([]);
      expect(validationResults).to.be.equal(true);
    });
  });

  describe('negative tests', () => {
    it('should return false when array contains a non-number value', () => {
      const validationResults = validator.isAllNumbers([1, 'two', 3]);
      expect(validationResults).to.be.equal(false);
    });
    it('should throw an error when provided a non-array value', () => {
      const input = 'one';

      expect(() => validator.isAllNumbers(input))
        .to.throw(`[${input}] is not an array`);
    });
  });
});
