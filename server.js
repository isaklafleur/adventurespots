require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");
const app = express();
const fetch = require("node-fetch");
const authRoutes = require("./server-routes");

const PORT = process.env.SERVER_PORT || 9000;
const PROTOCOL = process.env.PROTOCOL || "http";
const HOSTNAME = process.env.HOST || "localhost";
const CORS =
  process.env.NODE_ENV === "production" ? `${PROTOCOL}://${HOSTNAME}` : `*`;

app.use(express.static(path.join(__dirname, "build")));

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/auth", authRoutes);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, _ => console.log(`Server listening on PORT ${PORT}...`));
