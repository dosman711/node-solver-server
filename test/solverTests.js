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

    it('should return the correct value for addition', function () {
      assert.equal('42', solver.solve('30 + 12'));
    });

    it('should not error on invalid input', function () {
      assert.equal('Invalid input', solver.solve('fred'));
    });
  
  });
});
