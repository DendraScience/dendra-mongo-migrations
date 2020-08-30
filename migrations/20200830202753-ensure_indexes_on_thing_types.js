'use strict'

const COLL_NAME = 'thing_types'

module.exports = {
  up(db) {
    const coll = db.collection(COLL_NAME)

    return Promise.all([
      coll.createIndex({
        name: 1
      }),

      coll.createIndex({
        oem_company_id: 1,
        name: 1
      }),

      coll.createIndex({
        reseller_company_id: 1,
        name: 1
      }),

      coll.createIndex(
        {
          description: 'text',
          model: 'text',
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
      coll.dropIndex('oem_company_id_1_name_1'),
      coll.dropIndex('reseller_company_id_1_name_1'),
      coll.dropIndex('text_index')
    ])
  }
}
