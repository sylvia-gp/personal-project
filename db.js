const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  // getUser: getUser,
  getTanks: getTanks
}

function getTanks (db = connection) {
  return db('tanks').select()
}

// function getUser (id, db = connection) {
//   return db('users').where('id', id).first()
// }
