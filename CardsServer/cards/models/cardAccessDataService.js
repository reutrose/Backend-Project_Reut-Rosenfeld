const { createError } = require("../../utils/handleErrors");
const { bizNumExists } = require("../helpers/generateBizNum");
const Card = require("./mongodb/Card");
const config = require("config");

const DB = config.get("DB");

const createCard = async (newCard) => {
	if (DB === "MongoDB") {
		try {
			let card = new Card(newCard);
			card = await card.save();
			return card;
		} catch (error) {
			return createError("Mongoose", error);
		}
	}
	const error = new Error("Database not found.");
	error.status = 500;
	return createError("Database", error);
};

const getCards = async () => {
	if (DB === "MongoDB") {
		try {
			let cards = await Card.find();
			return cards;
		} catch (error) {
			return createError("Mongoose", error);
		}
	}
	const error = new Error("Database not found.");
	error.status = 500;
	return createError("Database", error);
};

const getCard = async (cardId) => {
	if (DB === "MongoDB") {
		try {
			let card = await Card.findById(cardId);
			return card;
		} catch (error) {
			return createError("Mongoose", error);
		}
	}
	const error = new Error("Database not found.");
	error.status = 500;
	return createError("Database", error);
};

const getMyCards = async (userId) => {
	if (DB === "MongoDB") {
		try {
			let cards = await Card.find({ user_id: userId });
			return cards;
		} catch (error) {
			return createError("Mongoose", error);
		}
	}
	const error = new Error("Database not found.");
	error.status = 500;
	return createError("Database", error);
};

const updateCard = async (cardId, newCard) => {
	if (DB === "MongoDB") {
		try {
			let card = await Card.findByIdAndUpdate(cardId, newCard, { new: true });
			return card;
		} catch (error) {
			return createError("Mongoose", error);
		}
	}
	const error = new Error("Database not found.");
	error.status = 500;
	return createError("Database", error);
};

const likeCard = async (cardId, userId) => {
	if (DB === "MongoDB") {
		try {
			let card = await Card.findById(cardId);
			if (!card) {
				const error = new Error("Card ID cannot be found in the Database");
				error.status = 404;
				return createError("Mongoose", error);
			}

			if (card.likes.includes(userId)) {
				let newLikesArray = card.likes.filter((id) => id != userId);
				card.likes = newLikesArray;
			} else {
				card.likes.push(userId);
			}
			await card.save();
			return card;
		} catch (error) {
			return createError("Mongoose", error);
		}
	}
	const error = new Error("Database not found.");
	error.status = 500;
	return createError("Database", error);
};

const changeBizNum = async (cardId, newBizNum) => {
	if (DB === "MongoDB") {
		try {
			let card = await Card.findById(cardId);
			if (!card) {
				const error = new Error("Could not find the requested card.");
				error.status = 404;
				return createError("Mongoose", error);
			}
			let isAvailable = await bizNumExists(newBizNum);
			if (!isAvailable) {
				const error = new Error("Business Number already exists.");
				error.status = 409;
				return createError("Mongoose", error);
			}

			card.bizNumber = newBizNum;
			await card.save();
			return card.bizNumber;
		} catch (error) {
			return createError("Mongoose", error);
		}
	}
	const error = new Error("Database not found.");
	error.status = 500;
	return createError("Database", error);
};

const deleteCard = async (cardId) => {
	if (DB === "MongoDB") {
		try {
			let card = await Card.findByIdAndDelete(cardId);
			return card;
		} catch (error) {
			return createError("Mongoose", error);
		}
	}
	const error = new Error("Database not found.");
	error.status = 500;
	return createError("Database", error);
};

module.exports = {
	createCard,
	getCards,
	getCard,
	getMyCards,
	updateCard,
	likeCard,
	changeBizNum,
	deleteCard,
};
