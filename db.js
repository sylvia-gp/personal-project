const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getTanks: getTanks,
  newFish: newFish,
  getFish: getFish,
  editFish: editFish
}

function getTanks (db = connection) {
  return db('tanks').select()
}

function newFish (fish, db = connection) {
  return db('fish').insert(fish)
}

function getFish (db = connection) {
  return db('fish').select()
}

function editFish (updatedFish, id, db = connection) {
  return db('fish').where('fish.id', id).update(updatedFish)
}