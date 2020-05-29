const mongoose = require("mongoose");
const { Schema } = mongoose;

const essaySchema = new Schema({
	task: String,
	essay: String,
	status: {
		type: String,
		enum: ["draft", "pending", "checking", "checked"],
		default: "draft",
	},
	result: { type: String, default: null },
	mark: { type: Number, default: -1 },
	_user: { type: Schema.Types.ObjectId, ref: "User" },
	checkedBy: { type: Schema.Types.ObjectId, ref: "User", default: null },
	created_at: { type: Date, default: Date.now },
});

mongoose.model("Essay", essaySchema);
