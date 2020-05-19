const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	setup:{
	type: String,
	required: [true, "Set up is required"],
	minlength: [10, "Your set up must be a minimum of 10 characters long"]
	},

	punchline:{
		type: String,
		required: [true, " Punchline is required"],
		minlength: [3, "Your punchline must be at least 3 characters long"]
	}
});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;