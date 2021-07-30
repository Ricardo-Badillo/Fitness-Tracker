const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const port = process.env.PORT || 5000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(morgan("combined"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/fitnesstracker_DB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

// routes
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));

app.listen(port, () => {
  console.log(`App running on port ${port}!`);
});