'use strict'
var Joi = require('joi')
var MessageSchemas = require('./messageSchemas')



module.exports = {

  APNSMessage: function (params) {
    var result = MessageSchemas.MessageParamsSchema.validate(params)
    if (result.error) {
      console.log(result.error)
      return result.error
    }

    var message = {
      "APNS": {
        "aps": {
        }
      }
    }

    if (params.message) {
      message.APNS.aps.alert = params.message
    }

    return message
  },
  APNS_SANDBOXMessage: function (params) {
    var result = MessageSchemas.MessageParamsSchema.validate(params)
    if (result.error) {
      console.log(result.error)
      return result.error
    }

    var message = {
      "APNS_SANDBOX": {
        "aps": {
        }
      }
    }

    if (params.message) {
      message.APNS_SANDBOX.aps.alert = params.message
    }

    return message

  },

  GCMMessage: function (params) {
    var result = MessageSchemas.MessageParamsSchema.validate(params)
    if (result.error) {
      console.log(result.error)
      return result.error
    }
    var message = {
      "GCM": {
        "data": {

        }
      }
    }

    if (params.message) {
      message.GCM.data.message = params.message
    }

    return message
  }
}