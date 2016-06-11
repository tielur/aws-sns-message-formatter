'use strict'
var Message = require('./message')

module.exports = {
  /**
  * Create a new sns message params for the specific ARN
  *
  * @param  {String} platformEndpointARN
  * @param  {String} message
  * @return {Object}
  */
  newMessage: function(params) {
    var message = {}
    var info = parseNotificationService(params.platformEndpointARN)
    switch(info.platform) {
      case 'APNS':
        message = Message.APNSMessage(params)
        break
      case 'GCM':
        message = Message.GCMMessage(params)
        break
      case 'APNS_SANDBOX':
        message = Message.APNS_SANDBOXMessage(params)
        break
    }
    return message
  }
}

function parseNotificationService (platformEndpointARN) {
  var info = {}
  var data = platformEndpointARN.split('/')

  info.platform = data[1]
  info.SNSApplication = data[2]

  return info

}
