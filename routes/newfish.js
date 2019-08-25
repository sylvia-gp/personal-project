const express = require('express')
const db = require('../db')
const router = express.Router()

const development = require('../knexfile').development
const knex = require('knex')(development)

router.get('/newfish', (req, res) => {
    res.render('partials/newfish')
})

router.post('/newfish', (req, res) => {
    const addNewFish = {
        image: req.body.image,
        species: req.body.species,
        quantity: req.body.quantity,
        tank_id: req.body.tank_id
    }
    db.newFish(addNewFish)
    .then(function () {
        res.redirect('/')
    })
})

module.exports = router