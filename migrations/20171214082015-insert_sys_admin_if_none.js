'use strict'

const now = new Date()
const defaultUser = {
  "email" : "metahuman@dendra.science",
  "name" : "Metahuman",
  "roles" : [
    "sys-admin"
  ],
  "password" : "$2a$12$EyT4Eeb4p5I.ZPZpGwEwBe9cvqn7wjgTLavQapnZ8unlzeJ9.RLvi",
  "updated_at" : now,
  "created_at" : now
}

module.exports = {
  up: function (db) {
    const users = db.collection('users')

    return users.findOne({roles: 'sys-admin'}).then(user => {
      if (!user) return users.insertOne(defaultUser)
    })
  },

  down: function (db) {
    const users = db.collection('users')

    return users.deleteOne({email: defaultUser.email})
  }
}
