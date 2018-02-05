'use strict'

module.exports = {
  up: function (db) {
    const dashboards = db.collection('dashboards')

    return Promise.all([
      dashboards.ensureIndex({
        organization_id: 1,
        slug: 1
      }, {
        unique: true
      }),

      dashboards.ensureIndex({
        organization_id: 1,
        enabled: 1,
        sort_value: 1
      })
    ])
  },

  down: function (db) {
    const dashboards = db.collection('dashboards')

    return Promise.all([
      dashboards.dropIndex('organization_id_1_slug_1'),
      dashboards.dropIndex('organization_id_1_enabled_1_sort_value_1')
    ])
  }
}
