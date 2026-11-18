const { expect } = require('chai');
const { describe, it, beforeEach, afterEach } = require('mocha');
const NumbersValidator = require('../../app/numbers_validator');

describe('getEvenNumbersFromArray', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  describe('positive tests', () => {
    it('should return an array of even numbers', () => {
      const validationResults = validator.getEvenNumbersFromArray([1, 2, 3, 4, 5, 6]);
      expect(validationResults).to.deep.equal([2, 4, 6]);
    });
    it('should return an empty array when no even numbers are provided', () => {
      const validationResults = validator.getEvenNumbersFromArray([1, 3, 5]);
      expect(validationResults).to.deep.equal([]);
    });
  });

  describe('negative tests', () => {
    it('should throw an error when provided a non-array value', () => {
      const input = 'four';
      expect(() => validator.getEvenNumbersFromArray(input))
        .to.throw(`[${input}] is not an array of "Numbers"`);
    });

    it('should throw an error when array contains non-number values', () => {
      const input = [1, 2, 'three'];

      expect(() => validator.getEvenNumbersFromArray(input))
        .to.throw(`[${input}] is not an array of "Numbers"`);
    });
  });
});
