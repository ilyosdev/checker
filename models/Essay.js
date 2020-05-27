const mongoose = require("mongoose");
const { Schema } = mongoose;

const essaySchema = new Schema({
	task: String,
	essay: String,
	status: String, //draft, pending, checking, checked
	result: { type: String, default: null },
	mark: { type: Number, default: -1 },
	_user: { type: Schema.Types.ObjectId, ref: "User" },
	checkedBy: { type: Schema.Types.ObjectId, ref: "User" },
});

mongoose.model("Essay", essaySchema);
