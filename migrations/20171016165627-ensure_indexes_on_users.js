'use strict'

module.exports = {
  up: function (db) {
    const users = db.collection('users')

    return Promise.all([
      users.ensureIndex({
        email: 1
      }, {
        sparse: true,
        unique: true
      })
    ])
  },

  down: function (db) {
    const users = db.collection('users')

    return Promise.all([
      users.dropIndex('email_1')
    ])
  }
}
