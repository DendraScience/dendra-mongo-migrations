'use strict'

const COLL_NAME = 'datastreams'

module.exports = {
  up(db) {
    const coll = db.collection('datastreams')

    return Promise.all([
      coll.createIndex({
        thing_type_id: 1
      })
    ])
  },

  down(db) {
    const coll = db.collection('datastreams')

    return Promise.all([coll.dropIndex('thing_type_id_1')])
  }
}
