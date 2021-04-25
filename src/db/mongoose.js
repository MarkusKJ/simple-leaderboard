const mongoose = require('mongoose')

//connecting to your database using mongoose.
mongoose.connect('*YOUR DATABASE DIRECTORY*', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})