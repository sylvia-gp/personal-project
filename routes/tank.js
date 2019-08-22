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

router.get('/tank:id', (req, res) => {
    db.getTanks()
    .where('tanks.id', req.params.id)
    .then((result) => {
        res.render('partials/tankinfopage', {tanks: result})
    })
})


module.exports = router