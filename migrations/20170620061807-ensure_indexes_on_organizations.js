'use strict'

const COLL_NAME = 'organizations'

module.exports = {
  up(db) {
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
          slug: 1
        },
        {
          sparse: true,
          unique: true
        }
      ),

      coll.createIndex(
        {
          description: 'text',
          full_name: 'text',
          name: 'text'
        },
        {
          name: 'text_index'
        }
      )
    ])
  },

  down(db) {
    const coll = db.collection(COLL_NAME)

    return Promise.all([
      coll.dropIndex('name_1'),
      coll.dropIndex('slug_1'),
      coll.dropIndex('text_index')
    ])
  }
}
