const express = require("express");
const connectToDB = require("./DB/dbService");
const router = require("./router/router");
const corsMiddleware = require("./middlewares/cors");
const { handleError } = require("./utils/handleErrors");
const chalk = require("chalk");
const { loggerMiddleware } = require("./logger/loggerService");
const createInitialData = require("./utils/initialData");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;

app.use(corsMiddleware);

app.use(express.json());

app.use(express.static("./public"));

app.use(loggerMiddleware());

app.use(router);

app.use((err, req, res, next) => {
	handleError(res, 500, "Internal Server error.");
});

app.listen(PORT, () => {
	console.log(chalk.bgGreen.black("The server is listening to port: " + PORT));
	connectToDB();
	createInitialData();
});
