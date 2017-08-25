require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const passport = require("passport");
const config = require("./config");
const app = express();
const fetch = require("node-fetch");
const authRoutes = require("./server/routes/auth");
const apiRoutes = require("./server/routes/api");

const PORT = process.env.SERVER_PORT || 9000;
const PROTOCOL = process.env.PROTOCOL || "http";
const HOSTNAME = process.env.HOST || "localhost";
const CORS =
  process.env.NODE_ENV === "production" ? `${PROTOCOL}://${HOSTNAME}` : `*`;

// connect to the database and load models
require("./server/models").connect(config.dbUri);

app.use(express.static(path.join(__dirname, "build")));

app.use(bodyParser.urlencoded({ extended: false }));

// pass the passport middleware
app.use(passport.initialize());

// load passport strategies
const localSignupStrategy = require("./server/passport/local-signup");
const localLoginStrategy = require("./server/passport/local-login");
passport.use("local-signup", localSignupStrategy);
passport.use("local-login", localLoginStrategy);

// pass the authenticaion checker middleware
const authCheckMiddleware = require("./server/middleware/auth-check");
app.use("/api", authCheckMiddleware);

// routes
app.use("/auth", authRoutes);
app.use("/api", apiRoutes);

/* app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
}); */

app.listen(PORT, _ => console.log(`Server listening on PORT ${PORT}...`));
