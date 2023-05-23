const express = require('express')


const app = express()

app.get('/users', (req, res) => {
    const json = {
        id: 1,
        username: "Tokaymen",
        email: "tokay@gmail.com"
    }
    res.send(json).statusCode(200)
})

module.exports = app