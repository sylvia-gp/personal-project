const express = require('express')
const db = require('../db')
const router = express.Router()

router.get('/', (req, res) => {
    db.getTanks()
    .then(tanks => {
        res.render('index', {tanks: tanks})
    })
    .catch(err => {
        res.status(500).send('DATABASE ERROR' + err.message)
    })
})

module.exports = router