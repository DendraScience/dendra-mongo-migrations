'use strict'

const COLL_NAME = 'datastreams'

module.exports = {
  up(db) {
    const coll = db.collection('datastreams')

    return Promise.all([
      // TODO: Implement
      // coll.createIndex({
      //   'hashes.key': 1,
      //   'hashes.str': 1
      // }),

      coll.createIndex({
        source: 1,
        source_type: 1
      }),

      coll.createIndex({
        station_id: 1,
        name: 1
      }),

      coll.createIndex({
        organization_id: 1,
        source_type: 1,
        name: 1
      }),

      coll.createIndex({
        'terms_info.class_keys': 1,
        _id: 1
      }),

      coll.createIndex({
        'terms_info.class_tags': 1,
        _id: 1
      }),

      coll.createIndex(
        {
          derivation_description: 'text',
          description: 'text',
          name: 'text',
          'terms_info.class_tags': 'text'
        },
        {
          name: 'text_index'
        }
      )
    ])
  },

  down(db) {
    const coll = db.collection('datastreams')

    return Promise.all([
      // TODO: Implement
      // coll.dropIndex('hashes.key_1_hashes.str_1'),
      coll.dropIndex('source_1_source_type_1'),
      coll.dropIndex('station_id_1_name_1'),
      coll.dropIndex('organization_id_1_source_type_1_name_1'),
      coll.dropIndex('terms_info.class_keys__id_1'),
      coll.dropIndex('terms_info.class_tags__id_1'),
      coll.dropIndex('text_index')
    ])
  }
}
