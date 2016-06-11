var should = require('chai').should(),
    exampleARN = require('./helpers/exampleARN'),
    formatter = require('../index')

describe('GCM', function() {
  before(function() {
    this.message = formatter.newMessage({
      platformEndpointARN: exampleARN.GCM,
      message: "hello, world!"
    })
  })

  it('has a GCM object', function() {
    this.message.should.have.property('GCM')
    this.message.should.be.an('object')
  })

  it('has a data key', function() {
    this.message.should.have.deep.property('GCM.data')
  })

  it('has a message', function() {
    this.message.should.have.deep.property('GCM.data.message', 'hello, world!')
  })
})