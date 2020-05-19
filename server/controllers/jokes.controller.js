const Joke = require("../models/jokes.model");

module.exports.findAllJokes = (req, res) => {
    Joke.find()
    .then(allDaJokes => res.json({ jokes: allDaJokes }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleJoke = (req, res) => {
	Joke.findOne({ _id: req.params.id })
		.then(oneSingleJoke => res.json({ joke: oneSingleJoke }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
    .then(newlyCreatedJoke => res.json({ joke: newlyCreatedJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.getRandomJoke = (req, res) => {
    Joke.find()
    .then(randomJoke=> {let rand = Math.floor(Math.random()*randomJoke.length);
    res.json(randomJoke[rand]);
})
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingJoke = (req, res) => {
    Joke.remove({ _id: req.params.id })
    .then(deleteJoke => res.json({ joke: deleteJoke}))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};