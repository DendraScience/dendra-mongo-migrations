'use strict'

module.exports = {
  up: function (db) {
    const datastreams = db.collection('datastreams')

    return Promise.all([
      datastreams.ensureIndex({
        'hashes.key': 1,
        'hashes.str': 1
      }),

      datastreams.ensureIndex({
        source: 1,
        enabled: 1
      }),

      datastreams.ensureIndex({
        station_id: 1,
        enabled: 1
      }),

      datastreams.ensureIndex({
        tags: 1,
        _id: 1
      })
    ])
  },

  down: function (db) {
    const datastreams = db.collection('datastreams')

    return Promise.all([
      datastreams.dropIndex('hashes.key_1_hashes.str_1'),
      datastreams.dropIndex('source_1_enabled_1'),
      datastreams.dropIndex('station_id_1_enabled_1'),
      datastreams.dropIndex('tags_1__id_1')
    ])
  }
}
