const reqAuth = require("../middlewares/authRequired");
const mongoose = require("mongoose");
const Essay = mongoose.model("Essay");

module.exports = app => {
	app.get("/api/essay", reqAuth, async (req, res) => {
		const allEssay = await Essay.find({
			_user: req.user,
		});
		if (!allEssay) {
			res.send("No data found");
		}
		res.send(allEssay);
	});

	app.post("/api/essay/create", reqAuth, async (req, res) => {
		const body = req.body;
		await new Essay({
			...body,
		}).save();

		res.send("/api/essay");
	});
};
