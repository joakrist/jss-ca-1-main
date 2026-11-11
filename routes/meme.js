// Meme detailed page

var express = require('express');
var createError = require('http-errors');
var router = express.Router();
var memeStore = require('../services/memeStore');

// Cheks is user is logged in
function requireLogin(req, res, next) {
	if (!req.user) {
		return res.redirect('/login');
	}
	next();
}

// Gets the meme and show details
async function showMeme(id, req, res, next) {
	try {
		var meme = await memeStore.getById(id);

		if (!meme) {
			return next(createError(404)); // finnes ikke
		}

		memeStore.markViewed(req.user.username, meme.id); // husk at den er sett
		res.render('meme', { meme: meme });
	} catch (err) {
		next(err);
	}
}

// Details btn POST id to /meme
router.post('/', requireLogin, function (req, res, next) {
	showMeme(req.body.id, req, res, next);
});

// If user tries direct link
router.get('/:id', requireLogin, function (req, res, next) {
	showMeme(req.params.id, req, res, next);
});

module.exports = router;