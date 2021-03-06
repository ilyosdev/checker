const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const bodyParser = require("body-parser");
var cookieSession = require("cookie-session");
const keys = require("./config/keys");

// modellar
require("./models/User");
require("./models/Essay");
// servicelar
require("./services/passport");

// mongooseni ulash
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const app = new express();

// body parser
app.use(bodyParser.json());

// cookie
app.use(
	cookieSession({
		// name: "session",
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey],
	}),
);

// initialize passport

app.use(passport.initialize());
app.use(passport.session());

// routelar
require("./routes/authRoutes")(app);
require("./routes/userRoutes")(app);
require("./routes/essayRoutes")(app);
// production un build ni uzatish

app.get("/", (req, res) => {
	res.send(req.session);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log("http://localhost:" + PORT));
