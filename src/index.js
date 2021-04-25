// For scalability reason this structure works by using routing.


const express = require('express')
require('./db/mongoose')
const Score = require('./models/structure')   //<--- connecting to the model/structure.
const scoreRouter = require('./routers/scoreboard') //<--- router set up for scoreboard.

const app = express();
const port = process.env.PORT || 0; // <-- set up your port

app.use(express.json())     //<--- setting up to use routers.
app.use(scoreRouter)        // <--- Using router/routers

app.listen(port, () => { // <--- listen to your port.  
    console.log('Server is up on port' + port)
})

