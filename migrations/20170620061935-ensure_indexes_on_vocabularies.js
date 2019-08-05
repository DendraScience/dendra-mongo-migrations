'use strict'

const COLL_NAME = 'vocabularies'

module.exports = {
  up(db) {
    const coll = db.collection(COLL_NAME)

    return Promise.all([
      coll.createIndex(
        {
          scheme_id: 1,
          label: 1
        },
        {
          unique: true
        }
      ),

      coll.createIndex(
        {
          description: 'text',
          label: 'text',
          'term.definition': 'text',
          'term.label': 'text',
          'term.name': 'text'
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
      coll.dropIndex('scheme_id_1_label_1'),
      coll.dropIndex('text_index')
    ])
  }
}
