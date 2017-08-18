(function (globals) {
  'use strict'
  globals.AppConfig = {
    'sendGrid': {
      'APIKey': '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'
    },
    'basicAuth': {
      'username': 'admin',
      'password': 'uxrocksmysocks'
    },
    getHttpOptions: function getHttpOptions () {
      return {
        'host': 'localhost',
        'port': 3008,
        'method': 'GET',
        'auth': this.getUsername() + ':' + this.getPassword(),
        'headers': {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    },
    getSendGridAPIKey: function getSendGridAPIKey () {
      return this.sendGrid.APIKey
    },
    getUsername: function getUsername () {
      return this.basicAuth.username
    },
    getPassword: function getPassword () {
      return this.basicAuth.password
    }
  }
}(this))
