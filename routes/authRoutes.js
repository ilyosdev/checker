const passport = require("passport");
module.exports = app => {
	app.get(
		"/auth/google",
		passport.authenticate("google", { scope: ["profile", "email"] }),
	);
	app.get(
		"/auth/google/callback",
		passport.authenticate("google"),
		(req, res) => {
			res.redirect("/api/current_user");
		},
	);

	app.get("/api/current_user", (req, res) => {
		if (req.user) {
			res.send(req.user);
		} else {
			res.status(401).send("User is not registered");
		}
	});

	app.get("/api/logout", (req, res) => {
		req.logout();
		res.redirect("/");
	});
};
