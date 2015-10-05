var assert = require('assert');
var solver = require('../solver');

describe('Solver', function () {
  describe('#solve()', function () {
    it('should return the value for a single number', function () {
      assert.equal('42', solver.solve('42'));
    });

    it('should ignore whitespace', function () {
      assert.equal('42', solver.solve(' 42 '));
      assert.equal('42', solver.solve('30 +      12'));
    });
    
    it('should allow expression to end with equals', function () {
      assert.equal('42', solver.solve('42='));
      assert.equal('42', solver.solve('33 + 9 ='));
    });

    it('should only allow for two operands', function () {
      assert.equal('Invalid input', solver.solve('33 + 6 + 4'));
    });

    it('should return an error for value on right side of equals', function () {
      assert.equal('Invalid input', solver.solve('42=42'));
    });

    it('should return the correct value for addition', function () {
      assert.equal('42', solver.solve('30 + 12'));
    });

    it('should return the correct value for subtraction', function () {
      assert.equal('42', solver.solve('45-3'));
    });

    it('should return the correct value for multiplication', function () {
      assert.equal('42', solver.solve('7 * 6'));
    });

    it('should return the correct value for division', function () {
      assert.equal('42', solver.solve('378 / 9 ='));
    });

    it('should not error on invalid input', function () {
      assert.equal('Invalid input', solver.solve('fred'));
    });
  
  });
});
