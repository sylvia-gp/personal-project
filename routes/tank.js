const express = require('express')
const db = require('../db')
const router = express.Router()

const development = require('../knexfile').development
const knex = require('knex')(development)

router.get('/', (req, res) => {
    db.getTanks()
    .then(tanks => {
        res.render('index', {tanks: tanks})
    })
    .catch(err => {
        res.status(500).send('DATABASE ERROR' + err.message)
    })
})

router.get('/tank:id', (req, res) => {
    db.getTanks()
    .where('tanks.id', req.params.id)
    .then((result) => {
        res.render('partials/tankinfopage', {tanks: result})
    })
})

router.get('/tank:id/fish', (req, res) => {
    const id = req.params.id
    knex('fish')
    .join('tanks', 'fish.tank_id', 'tanks.id')
    .where({'fish.tank_id': id})
    .select('fish.id', 'image', 'species', 'quantity')
    .then(function (fishes) {
        const fish = fishes
        res.render('partials/fishinfo', {fish: fish})
    })
})

router.get('/fish:id', (req, res) => {
    db.getFish()
    .where('fish.id', req.params.id)
    .then((result) => {
        res.render('partials/editfish', {fish: result})
    })
})

router.post('/fish:id', (req, res) => {
    const id = req.params.id
    const updatedFish = {
        id: id,
        species: req.body.species,
        quantity: req.body.quantity,
        tank_id: req.body.tank_id
    }
    db.editFish(updatedFish, id)
    .then(function () {
        res.redirect('/')
    })
})

module.exports = router