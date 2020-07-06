const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult} = require('express-validator');
const normalize = require('normalize-url');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route GET api/profile/me
// @desc Get current user profile
// @access Private
router.get('/me', auth, async (req, res) => {
	try {
		const profile = await Profile.findOne({user: req.user.id}).populate('user', ['name', 'avatar']);

		if (!profile) {
			return res.status(400).json({msg: 'There is no profile for this user'})
		}

		res.json(profile);
	} catch (err) {
		console.error(error.message);
		res.status(500).send('Server Error');
	}

});

// @route POST api/profile
// @desc Create or update user profile
// @access Private

router.post('/', [auth, [
	check('status', 'Status is required').not().isEmpty(),
	check('skills', 'Skills is required').not().isEmpty(),
]], async (req, res) => {
	const errors = validationResult(req);
	if(!errors.isEmpty()) {
		return res.status(400).json({errors: errors.array()})
	}

	const {
		company,
		location,
		website,
		bio,
		skills,
		status,
		githubusername,
		youtube,
		twitter,
		instagram,
		linkedin,
		facebook
	} = req.body;

	const profileFields = {
		user: req.user.id,
		company,
		location,
		website: website && website !== '' ? normalize(website, { forceHttps: true }) : '',
		bio,
		skills: Array.isArray(skills)
			? skills
			: skills.split(',').map((skill) => ' ' + skill.trim()),
		status,
		githubusername
	};
});

module.exports = router;
