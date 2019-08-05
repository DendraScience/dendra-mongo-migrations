'use strict'

const COLL_NAME = 'stations'

module.exports = {
  up(db) {
    const coll = db.collection(COLL_NAME)

    return Promise.all([
      // TODO: Implement
      // coll.createIndex({
      //   'hashes.key': 1,
      //   'hashes.str': 1
      // }),

      coll.createIndex(
        {
          slug: 1
        },
        {
          sparse: true,
          unique: true
        }
      ),

      coll.createIndex({
        station_type: 1,
        name: 1
      }),

      coll.createIndex({
        organization_id: 1,
        station_type: 1,
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
      // TODO: Implement
      // coll.dropIndex('hashes.key_1_hashes.str_1'),
      coll.dropIndex('slug_1'),
      coll.dropIndex('station_type_1_name_1'),
      coll.dropIndex('organization_id_1_station_type_1_name_1'),
      coll.dropIndex('text_index')
    ])
  }
}
