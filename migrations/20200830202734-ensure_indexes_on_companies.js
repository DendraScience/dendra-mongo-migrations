'use strict'

const COLL_NAME = 'companies'

module.exports = {
  up(db) {
    const coll = db.collection(COLL_NAME)

    return Promise.all([
      coll.createIndex({
        full_name: 1
      }),

      coll.createIndex({
        company_type: 1,
        name: 1
      }),

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

  down(db) {
    const coll = db.collection(COLL_NAME)

    return Promise.all([
      coll.dropIndex('full_name_1'),
      coll.dropIndex('company_type_1_name_1'),
      coll.dropIndex('text_index')
    ])
  }
}
