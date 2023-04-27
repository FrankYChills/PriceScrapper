const express = require("express");

// make app
const app = express();

const path = require("path");

// define PORT
const PORT = process.env.PORT || 4000;

//cors
const cors = require("cors");

//allow cors
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Error handling on the server
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something broke!" });
});

// tell express to use static files(in views directory)
app.use("/", express.static(path.join(__dirname, "public")));

// handle requests
app.use("/", require("./routes/root"));

// handle 404 Page not found
app.get("*", function (req, res) {
  res.status(404).json({ message: "Resource doesn't exists" });
});

app.listen(PORT, () => {
  console.log("Server is listening on PORT ", PORT, " 🚀");
});
