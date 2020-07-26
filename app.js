const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const moment = require('moment');
const cors = require("cors");

// Models
const Destination = require('./models/destination.js');

// Hide creds. from repo
const mongoDB = process.env.MONGODB_URL;

// Set up default mongoose connection
mongoose.connect(mongoDB, { useUnifiedTopology: true, useNewUrlParser: true });

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Set a callback to let us know we've successfully connected
db.once('open', function() {
	console.log('Connected to DB...');
});
//-------------------------------------//

const app = express();
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(request, response) {
	response.render('index', {});
});

app.get('/login', function(request, response) {
	response.render('login', {});
});

app.get('/register', function(request, response) {
	response.render('register', {});
});

app.get('/gallery', function(request, response) {
	response.render('gallery', {});
});

app.get('/:id', function(request, response) {
	// model.findOne returns the first object it finds
	// model.find will always return an array, even if it only finds one
	Destination.findOne({ id: request.params.id }, function(error, destination) {
		// Check for IDs that are not in our list
		if (!destination) {
			// return response.send('Invalid ID.');
			 return response.render('404-error', {});
		}
		response.render('destination-single', destination);
	});
});
//********************************** */
app.get('/api/destinations', function(request, response) {
	Destination.find(function(error, destinations) {
		response.json(destinations);
	});
});

// if no file or endpoint found, send a 404 error as a response to the browser

// if no file or endpoint found, send a 404 error as a response to the browser

app.use(function( request, response) {
		response.status(404);
		// res.find(function(error,response) {
		response.render('404-error', {})
		});

/// start up server
const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
	console.log(`Listening on port ${PORT}`);
});
