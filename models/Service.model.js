const mongoose = require("mongoose");
const autoIncreament = require("mongoose-auto-increment");

//Init auto increament
autoIncreament.initialize(mongoose.connection);

const SubServiceSchema = new mongoose.Schema({
	title: { type: String, required: true },
	slug: { type: String, required: true, unique: true },
	cover: { type: String, required: true },
});

const ServiceSchema = new mongoose.Schema({
	title: { type: String, unique: true },
	slug: { type: String, unique: true },
	cover: String,
	description: String,
	subservices: { type: [SubServiceSchema], minlength: 1 },
	createDate: {
		type: Date,
		default: Date.now(),
	},
});
const finalSchema = new mongoose.Schema({
	ar: {
		type: ServiceSchema,
		required: true,
	},
	en: {
		type: ServiceSchema,
		required: true,
	},
});

ServiceSchema.plugin(autoIncreament.plugin, { model: "Service", startAt: 1 });

module.exports = mongoose.model("Service", finalSchema, "serivces");