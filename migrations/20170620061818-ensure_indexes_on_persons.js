'use strict'

const COLL_NAME = 'persons'

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

      coll.createIndex(
        {
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
      coll.dropIndex('text_index')
    ])
  }
}
