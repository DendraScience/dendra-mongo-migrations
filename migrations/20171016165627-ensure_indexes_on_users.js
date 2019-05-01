'use strict'

const COLL_NAME = 'users'

module.exports = {
  up: function(db) {
    const coll = db.collection(COLL_NAME)

    return Promise.all([
      coll.createIndex(
        {
          email: 1
        },
        {
          sparse: true,
          unique: true
        }
      ),

      coll.createIndex({
        person_id: 1
      }),

      coll.createIndex(
        {
          email: 'text',
          full_name: 'text',
          name: 'text'
        },
        {
          name: 'text_index'
        }
      )
    ])
  },

  down: function(db) {
    const coll = db.collection(COLL_NAME)

    return Promise.all([
      coll.dropIndex('email_1'),
      coll.dropIndex('person_id_1'),
      coll.dropIndex('text_index')
    ])
  }
}
