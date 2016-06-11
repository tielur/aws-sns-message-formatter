'use strict'

/**
  Amazon Example Platform Endpoints
*/
module.exports = {
  // Apple Push Notification Service
  APNS: (function() {
    return "arn:aws:sns:us-west-2:555555555555:endpoint/APNS/platformName/aa069262-7259-4a0c-8ad8-775f26857181"
  })(),
  // Apple Push Notification Service Sandbox (Development)
  APNS_SANDBOX: (function() {
    return "arn:aws:sns:us-west-2:555555555555:endpoint/APNS_SANDBOX/platformName/aa069262-7259-4a0c-8ad8-775f26857181"
  })(),
  // Google Cloud Messaging
  GCM: (function() {
    return "arn:aws:sns:us-west-2:555555555555:endpoint/GCM/platformName/aa069262-7259-4a0c-8ad8-775f26857181"
  })()
}