const mongoose = require('mongoose');
require('dotenv/config')

const url = process.env.DB_CONNECTION;

module.exports = mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('Connected to DB....')
})
.catch((error) => {
    console.log(error)
}) 