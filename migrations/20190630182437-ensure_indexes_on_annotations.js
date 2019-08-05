'use strict'

const COLL_NAME = 'annotations'

module.exports = {
  up(db) {
    const coll = db.collection(COLL_NAME)

    return Promise.all([
      coll.createIndex({
        'intervals.begins_at': 1,
        'intervals.ends_before': 1
      }),

      coll.createIndex({
        organization_id: 1,
        title: 1
      }),

      coll.createIndex(
        {
          description: 'text',
          title: 'text'
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
      coll.dropIndex('intervals.begins_at_1_intervals.ends_before_1'),
      coll.dropIndex('organization_id_1_title_1'),
      coll.dropIndex('text_index')
    ])
  }
}
