const express = require('express')
const bodyParser = require('body-parser')

const app = express()


// DB Connections
const db = require('./database/connection')
app.use(bodyParser.json())


