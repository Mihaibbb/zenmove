if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const express = require("express");
const cors = require("cors");
const connection = require("./db");
const app = express();

const busRouter = require("./routes/bus");
const taxiRouter = require("./routes/taxi");
const tramwayRouter = require("./routes/tramway");
const trainRouter = require("./routes/train");
const pedestrialRouter = require("./routes/pedestrial");

connection();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use("/bus", busRouter);
app.use("/taxi", taxiRouter);
app.use("/train", trainRouter);
app.use("/tramway", tramwayRouter);
app.use("/pedestrial", pedestrialRouter);

app.listen(8000, () => console.log(""));