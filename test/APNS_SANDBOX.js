var should = require('chai').should(),
    exampleARN = require('./helpers/exampleARN'),
    formatter = require('../index')

describe('APNS_SANDBOX', function() {
  before(function() {
    this.message = formatter.newMessage({
      platformEndpointARN: exampleARN.APNS_SANDBOX,
      message: "hello, world!"
    })
  })

  it('has an APNS object', function() {
    this.message.should.have.property('APNS_SANDBOX')
    this.message.should.be.an('object')
  })

  it('has a \'aps\' key', function() {
    this.message.should.have.deep.property('APNS_SANDBOX.aps')
  })

  it('should have an \'alert\' object', function() {
    this.message.should.have.deep.property('APNS_SANDBOX.aps.alert', 'hello, world!')
  })
})