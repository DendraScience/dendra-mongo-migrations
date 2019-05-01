'use strict'

module.exports = {
  up: function (db) {
    const memberships = db.collection('memberships')

    return Promise.all([
      memberships.ensureIndex({
        organization_id: 1,
        person_id: 1
      }, {
        unique: true
      }),

      memberships.ensureIndex({
        person_id: 1
      })
    ])
  },

  down: function (db) {
    const memberships = db.collection('memberships')

    return Promise.all([
      memberships.dropIndex('organization_id_1_person_id_1'),
      memberships.dropIndex('person_id_1')
    ])
  }
}
