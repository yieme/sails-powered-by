var should = require('chai').should(),
    sailsPoweredBy = require('..')
;

describe('sails-powered-by', function() {
  it('should say hello', function(done) {
    var test = sailsPoweredBy()
    test.value.should.equal('Hello, world');
    done();
  });
});
