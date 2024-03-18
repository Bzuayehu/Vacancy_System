const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path");
const morgan = require("morgan");
require("express-async-errors");
require("colors");
const cors = require("cors");
const connectDB = require("./server/database/connection");

// importing routes
const authRoute = require("./server/routes/authroute.js");
const userRoute = require("./server/routes/userroute.js");
const jobRoute = require("./server/routes/jobroute.js");
const errorMiddleware = require("./server/middlewares/errorMiddleware"); 

const app = express();

//configuration
dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;

app.use(cors())
app.use(morgan("dev"));
connectDB();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
// setting the enjiene
app.set("view engiene", "ejs");

// //loading views
// app.use("/CSS", express.static(path.resolve(__dirname, "assets/CSS")));
// app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
// app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

// route middleware
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/job", jobRoute);
app.get("/", (req, res) => {
  // res.send(" <h1> hello world </h1>");
   console.log(req.body)
});

app.use(errorMiddleware); 
app.listen(PORT, () => {
  console.log(
    `Node server is running on http server  at http://localhost:${PORT}`
      .bgMagenta.white
  );
});
