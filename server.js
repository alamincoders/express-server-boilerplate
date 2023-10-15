const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/v1/user.route");
const dbConnect = require("./utils/dbConnect");
const errorHandler = require("./middleware/errorHandler");
const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

// Uses the express middleware

// routes
app.use("/api/v1/users", userRouter);

// db connection
dbConnect();

// listen
app.get("/", (req, res) => {
  res.send("Welcome to Express Server");
});

app.all("*", (req, res) => {
  res.send("Routes Not Found!");
});

app.listen(port, () => {
  console.log("listening on port " + port);
});
