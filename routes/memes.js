// Memes list page

var express = require('express');
var router = express.Router();
var memeStore = require('../services/memeStore');

// Show memes list and search in navbar
router.get('/', async function (req, res, next) {
	try {
		var search = req.query.search || '';
		var memes = await memeStore.search(search);
		var viewed = memeStore.getViewed(res.locals.currentUser);

		res.render('memes', { memes: memes, viewed: viewed, search: search });
	} catch (err) {
		next(err);
	}
});

module.exports = router;