'use strict'

// This is where you can configure migrate-mongo
module.exports = {
  // The mongodb collection where the applied changes are stored
  changelogCollectionName: '_changelog',

  mongodb: {
    url: process.env.MONGO_URL,

    databaseName: process.env.MONGO_DB_NAME,

    options: {
      useNewUrlParser: true // removes a deprecation warning when connecting
      //   connectTimeoutMS: 3600000, // increase connection timeout to 1 hour
      //   socketTimeoutMS: 3600000, // increase socket timeout to 1 hour
    }
  }
}
