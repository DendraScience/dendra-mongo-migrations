'use strict'

const COLL_NAME = 'soms'

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
      )
    ])
  },

  down(db) {
    const coll = db.collection(COLL_NAME)

    return Promise.all([coll.dropIndex('name_1')])
  }
}
