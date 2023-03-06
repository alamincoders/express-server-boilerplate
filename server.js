const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/v1/user.route");
const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

// routes
app.route("/api/v1/user", userRouter);

// db connection

// listen

app.get("/", (req, res) => {
  res.send("Welcome to Express Server");
});

/* app.all("*", () => {
  console.log("Routes Not Found!");
}); */

app.listen(port, () => {
  console.log("listening on port " + port);
});
