const morgan = require('morgan')
const express = require('express')
const app = express()

const teams = require('./data.json')

const port = 3001 || process.env.PORT

app.use(morgan('dev'))

app.get('/', (req, res, next) => {
    res.send({msg: "Hello World"})
})

app.get('/teams', (req, res, next) => {
    res.send({team: teams.teams})
})

app.listen(port, ()=> {
    console.log(`Listening at port ${port}`)
})
