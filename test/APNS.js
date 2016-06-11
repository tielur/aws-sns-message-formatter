var should = require('chai').should(),
    exampleARN = require('./helpers/exampleARN'),
    formatter = require('../index')

describe('APNS', function() {
  before(function() {
    this.message = formatter.newMessage({
      platformEndpointARN: exampleARN.APNS,
      message: "hello, world!"
    })
  })

  it('has an APNS object', function() {
    this.message.should.have.property('APNS')
    this.message.should.be.an('object')
  })

  it('has a \'aps\' key', function() {
    this.message.should.have.deep.property('APNS.aps')
  })

  it('should have an \'alert\'', function() {
    this.message.should.have.deep.property('APNS.aps.alert', 'hello, world!')
  })
})