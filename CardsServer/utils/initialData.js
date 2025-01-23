const { generateBizNum } = require("../cards/helpers/generateBizNum");
const Card = require("../cards/models/mongodb/Card");
const { generatePassword } = require("../users/helpers/bcrypt");
const User = require("../users/models/mongodb/User");
const chalk = require("chalk");
const { createError } = require("./handleErrors");
require("dotenv").config();
const PASSWORD = process.env.INITIAL_DATA_PASSWORD;
const SECRET_WORD = process.env.SECRET_WORD;

// Create Random Users
const createUsers = async () => {
	const users = [
		{
			name: {
				first: "Emily",
				middle: "Rose",
				last: "Johnson",
			},
			phone: "0504567890",
			email: "email1@example.com",
			password: generatePassword(PASSWORD),
			image: {
				url: "https://example.com/images/emily.jpg",
				alt: "Portrait of Emily Rose Johnson",
			},
			address: {
				state: "California",
				country: "USA",
				city: "Los Angeles",
				street: "Sunset Boulevard",
				houseNumber: 101,
				zip: 90210,
			},
			isAdmin: false,
			isBusiness: false,
		},
		{
			name: {
				first: "Rajesh",
				middle: "Kumar",
				last: "Patel",
			},
			phone: "0506543210",
			email: "email2@example.com",
			password: generatePassword(PASSWORD),
			image: {
				url: "https://example.com/images/rajesh.jpg",
				alt: "Portrait of Rajesh Kumar Patel",
			},
			address: {
				state: "Gujarat",
				country: "India",
				city: "Ahmedabad",
				street: "Navrangpura Road",
				houseNumber: 42,
				zip: 30000,
			},
			isAdmin: false,
			isBusiness: true,
		},
		{
			name: {
				first: "Sophia",
				middle: "Anne",
				last: "Martinez",
			},
			phone: "0507891234",
			email: "email3@example.com",
			password: generatePassword(PASSWORD),
			image: {
				url: "https://example.com/images/sophia.jpg",
				alt: "Portrait of Sophia Anne Martinez",
			},
			address: {
				state: "Ontario",
				country: "Canada",
				city: "Toronto",
				street: "Queen Street",
				houseNumber: 200,
				zip: 40000,
			},
			isAdmin: true,
			isBusiness: false,
		},
	];
	await User.insertMany(users);
	console.log(chalk.bgBlue.white("3 Users created for initial data."));
};

// Create Random Cards
const createCards = async () => {
	const businessUser = await User.findOne({ email: "email2@example.com" });
	const cards = [
		{
			title: "The First Card",
			subtitle: "It's The First Card",
			description: "This is the first card in the database.",
			phone: "036123456",
			email: "email4@example.com",
			web: "www.bing.com",
			image: {
				url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/ISR-FW-1.svg/800px-ISR-FW-1.svg.png",
				alt: "number 1",
			},
			address: {
				state: "IL",
				country: "Israel",
				city: "Jerusalem",
				street: "Ben Yehuda",
				houseNumber: 1,
				zip: 232323,
			},
			bizNumber: await generateBizNum(),
			user_id: businessUser._id,
		},
		{
			title: "The Second Card",
			subtitle: "It's The Second Card",
			description: "This is the Second card in the database.",
			phone: "036123456",
			email: "email5@example.com",
			web: "www.google.com",
			image: {
				url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/ISR-FW-2.svg/250px-ISR-FW-2.svg.png",
				alt: "number 2",
			},
			address: {
				state: "IL",
				country: "Israel",
				city: "Tel Aviv",
				street: "Ben Gurion",
				houseNumber: 1000,
				zip: 232323,
			},
			bizNumber: await generateBizNum(),
			user_id: businessUser._id,
		},
		{
			title: "The Third Card",
			subtitle: "It's The Third Card",
			description: "This is the Third card in the database.",
			phone: "036123456",
			email: "email6@example.com",
			web: "www.youtube.com",
			image: {
				url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSScKSa8sCIaZSBiYnlr1LsP2zFfCwzioOTUQ&s",
				alt: "number 3",
			},
			address: {
				state: "IL",
				country: "Israel",
				city: "Beer Sheva",
				street: "Ben David",
				houseNumber: 444,
				zip: 232323,
			},
			bizNumber: await generateBizNum(),
			user_id: businessUser._id,
		},
	];
	await Card.insertMany(cards);
	console.log(chalk.bgBlue.white("3 Cards created for initial data."));
};

const checkIfUsersCreated = async () => {
	const users = await User.find();
	if (users.length === 0) {
		return false;
	}
	return true;
};

const checkIfCardsCreated = async () => {
	const cards = await Card.find();
	if (cards.length === 0) {
		return false;
	}
	return true;
};

const createInitialData = async () => {
	if (!SECRET_WORD) {
		console.error(
			"In order to create initial data, please provide the SECRET_WORD in the .env file."
		);
		return;
	}
	try {
		(await checkIfUsersCreated()) ? null : await createUsers();
		(await checkIfCardsCreated()) ? null : await createCards();
	} catch (error) {
		console.error("Error seeding database:", error);
	}
};

module.exports = createInitialData;
