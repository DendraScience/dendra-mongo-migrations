'use strict'

module.exports = {
  up: function (db) {
    const things = db.collection('things')

    return Promise.all([
      things.ensureIndex({
        name: 1
      })
    ])
  },

  down: function (db) {
    const things = db.collection('things')

    return Promise.all([
      things.dropIndex('name_1')
    ])
  }
}
