const rateLimit = require("express-rate-limit");
const { handleError } = require("../../utils/handleErrors");

const loginLimiter = rateLimit({
	windowMs: 24 * 60 * 60 * 1000,
	max: 3,
	message: "Too many login attempts. Try again after 24 hours.",
	keyGenerator: (req, res) => {
		return req.body.email || "unknown";
	},
	handler: (req, res, next, options) => {
		handleError(res, options.statusCode, options.message);
	},
	skipSuccessfulRequests: true,
});

module.exports = loginLimiter;
