const express = require('express')
const Score = require('../models/structure')
const router = new express.Router()



// this is for api calls.
// *where the magic happens*
///////////////////////////////
// Using the same kind of structure to other components works.

router.post('/scores', async (req, res) => {
    const score = new Score(req.body)
    try {
        await score.save()
        res.status(201).send(score)
    } catch (err) {
        res.status(400).send(err)
    }
})

router.get('/scores', async (req, res) => {
    try {
        const score = await Score.find({})
        res.send(score)
    } catch (err) {
        res.status(500).send()
    }
})

module.exports = router