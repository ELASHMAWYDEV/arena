require("dotenv/config");
const mongoose = require("mongoose");
const functions = require("firebase-functions");


//Connect to mongodb
mongoose.connect(process.env.MONGO_URI || functions.config().db.uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true,
});

//Handle connection and database errors
const db = mongoose.connection;

db.on("error", (err) => {
	console.log(`MongoDB Error: ${err.message}`);
});

db.once("open", () => console.log("connected to DB"));
db.once("close", () => console.log("Connection to DB closed..."));