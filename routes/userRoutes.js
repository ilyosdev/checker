const authReq = require("../middlewares/authRequired");
module.exports = app => {
	app.get("/api/users/:id", authReq, (req, res) => {
		res.send(req.params);
	});
};
