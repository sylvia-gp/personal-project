const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getTanks: getTanks,
  newFish: newFish
}

function getTanks (db = connection) {
  return db('tanks').select()
}

function newFish (fish, db = connection) {
  return db('fish').insert(fish)
}