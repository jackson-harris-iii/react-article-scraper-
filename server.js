//reqire dependencies
const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const logger = require('morgan')
const mongoose = require('mongoose')
var cheerio = require('cheerio');
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
    
    // Connect to the Mongo DB
    mongoose.connect("mongodb://localhost/scraperdb");

	server.listen(3000);
	//init morgan logger
	server.use(logger('dev'));

	//enable body-parser
    server.use(bodyParser.urlencoded({ extended: true }));
    
    server.get('/scrape', (req, res) => {
        request('https://www.nytimes.com/', (err, response, html) => {
            var $ = cheerio.load(html)

            var results = []

            $('.story-heading').each((i, element) => {
                var link = $(element).children().attr('href')

                var title = $(element).children().text()

                results.push({ title: title, link: link })
            })
            console.log(results);
            res.json(results)
        });
    })

});    
