const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = Schema({
	googleId: String,
	email: String,
	name: String,
	country: String,
	city: Number,
	role: Number,
	balance: Number,
	created_at: { type: Date, default: Date.now },
	// username: String,
});

mongoose.model("User", userSchema);
