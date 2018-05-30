//reqire dependencies
const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const mongoose = require('mongoose')
// const db = require("./models")

//define port
const PORT = process.env.PORT || 7000

//init express
const app = express();

//start server
app.listen(PORT, () => {
    console.log("server running on PORT:" + PORT + "." )
})