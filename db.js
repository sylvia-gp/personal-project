const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getTanks: getTanks
}

function getTanks (db = connection) {
  return db('tanks').select()
}