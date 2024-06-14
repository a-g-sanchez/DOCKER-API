const morgan = require('morgan')
const express = require('express')
const app = express()

const port = 3001 || process.env.PORT

app.use(morgan('dev'))

app.use('/', (req, res, next) => {
    res.send({msg: "Hello World"})
})

app.listen(port, ()=> {
    console.log(`Listening at port ${port}`)
})
