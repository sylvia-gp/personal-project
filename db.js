const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  // getTankInfo: getTankInfo,
  getTanks: getTanks
}

function getTanks (db = connection) {
  return db('tanks').select()
}

// function getTankInfo (id, db = connection) {
//   return db('tanks').where('id', id)
// }
