'use strict'
var Joi = require('joi')

module.exports = {
  MessageParamsSchema: Joi.object({
    platformEndpointARN: Joi.string().required(),
    message: [Joi.string(), Joi.object()],
    badge: Joi.number()
  })
}