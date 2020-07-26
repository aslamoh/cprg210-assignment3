const mongoose = require('mongoose');
// Step 1: Define our Schema
const gallerySchema = new mongoose.Schema({
	id: Number,
	title: String,
	description: String,
	fileName: String,
	attribution: {
		source: String,
		credit: String,
		url: String
	}
});
// Compile and export our model using the above Schema.
module.exports = mongoose.model('Destination', gallerySchema);
