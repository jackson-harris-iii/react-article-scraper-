//reqire dependencies
const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const logger = require('morgan')
const mongoose = require('mongoose')
// const db = require("./models")

//define port
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


//start server
app.prepare().then(() => {
	const server = express();

	server.get('*', (req, res) => {
		handle(req, res);
	});

	server.listen(3000);
	//init morgan logger
	server.use(logger('dev'));

	//enable body-parser
	server.use(bodyParser.urlencoded({ extended: true }));
});    