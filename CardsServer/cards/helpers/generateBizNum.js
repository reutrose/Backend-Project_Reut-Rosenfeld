const { handleError, createError } = require("../../utils/handleErrors");
const Card = require("../models/mongodb/Card");
const _ = require("lodash");

const generateBizNum = async () => {
	try {
		const MAX_CARDS = 8_999_999;
		let cardCount = await Card.countDocuments();
		if (cardCount >= MAX_CARDS) {
			const error = new Error("Maximum amount of cards reached.");
			error.status = 507;
			return createError("Mongoose", error);
		}
		let random = _.random(1_000_000, 9_999_999);
		let isAvailable = await bizNumExists(random);
		return isAvailable ? random : generateBizNum();
	} catch (error) {
		return createError("Mongoose", error);
	}
};

const bizNumExists = async (bizNumber) => {
	try {
		const check = await Card.findOne({ bizNumber });
		return !check;
	} catch (error) {
		error.status = 500;
		createError("Mongoose" + error);
		return false;
	}
};

module.exports = { generateBizNum, bizNumExists };
