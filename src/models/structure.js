const mongoose = require('mongoose')


//Basic structure for leaderboard.
//This structure will show up in your database.(JSON)
// Add some extra spices if you will.-->mongoose docs or download validator.
const Score = mongoose.model('Score', {
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    scorenumber: {
        type: Number,
        required: true
    }
})

module.exports = Score // <--- Released in to the wild.