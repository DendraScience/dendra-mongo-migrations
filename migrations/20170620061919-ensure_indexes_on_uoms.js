'use strict'

const COLL_NAME = 'uoms'

module.exports = {
  up(db) {
    const coll = db.collection(COLL_NAME)

    return Promise.all([
      coll.createIndex({
        som_id: 1
      }),

      coll.createIndex({
        unit_tags: 1
      })
    ])
  },

  down(db) {
    const coll = db.collection(COLL_NAME)

    return Promise.all([
      coll.dropIndex('som_id_1'),
      coll.dropIndex('unit_tags_1')
    ])
  }
}
