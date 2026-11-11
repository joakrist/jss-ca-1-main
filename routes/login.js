//Login and authenticate

var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local');

// Gets the users
var users = require('../config/users.json').users;

// Checks user and password
passport.use(new LocalStrategy(function verify(username, password, cb) {
	var user = users.find(function (u) {
		return u.username === username;
	});

	if (user && user.password === password) {
		return cb(null, user); // riktig innlogging
	}
	return cb(null, false); // feil brukernavn eller passord
}));

// Stores the user
passport.serializeUser(function (user, cb) {
	cb(null, { username: user.username });
});

// Gets the user
passport.deserializeUser(function (user, cb) {
	cb(null, user);
});

// Render login page
router.get('/', function (req, res, next) {
	if (req.user) {
		return res.redirect('/memes');
	}
	res.render('login', { error: req.query.error });
});

// Gets the form
router.post('/', passport.authenticate('local', {
	successRedirect: '/memes',
	failureRedirect: '/login?error=1',
}));

// Logs out and loads memes page
router.get('/logout', function (req, res, next) {
	req.logout(function (err) {
		if (err) {
			return next(err);
		}
		res.redirect('/memes');
	});
});

module.exports = router;