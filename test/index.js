var should = require('chai').should(),
    exampleARN = require('./helpers/exampleARN'),
    formatter = require('../index')

describe('#newMessage', function() {
  before(function() {
    this.message = formatter.newMessage({
      platformEndpointARN: exampleARN.APNS,
      message: "hello, world!"
    })
  })

  it('return an object', function() {
    this.message.should.be.an('object')
  })
})