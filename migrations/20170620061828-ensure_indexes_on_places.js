'use strict'

const COLL_NAME = 'places'

module.exports = {
  up: function(db) {
    const coll = db.collection(COLL_NAME)

    return Promise.all([
      coll.createIndex(
        {
          name: 1
        },
        {
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

    return Promise.all([coll.dropIndex('name_1'), coll.dropIndex('text_index')])
  }
}
