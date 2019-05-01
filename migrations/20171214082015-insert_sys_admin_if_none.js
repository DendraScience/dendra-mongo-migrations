'use strict'

const COLL_NAME = 'users'

const now = new Date()
const defaultUser = {
  email: 'metahuman@dendra.science',
  is_enabled: true,
  name: 'Metahuman',
  password: '$2a$12$EyT4Eeb4p5I.ZPZpGwEwBe9cvqn7wjgTLavQapnZ8unlzeJ9.RLvi',
  roles: ['sys-admin'],
  updated_at: now,
  created_at: now
}

module.exports = {
  up: function(db) {
    const coll = db.collection(COLL_NAME)

    return coll.findOne({ roles: 'sys-admin' }).then(user => {
      if (!user) return coll.insertOne(defaultUser)
    })
  },

  down: function(db) {
    const coll = db.collection(COLL_NAME)

    return coll.deleteOne({ email: defaultUser.email })
  }
}
