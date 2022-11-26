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

const { spawn } = require("child_process");


    const py = spawn('python3', ['main.py']);
    py.stdout.on('data', res => {
        console.log(res.toString());
    });

   




var targetObj = {};
var targetProxy = new Proxy(targetObj, {
  set: function (target, key, value) {
      console.log(`${key} set to ${value}`);
      target[key] = value;
      return true;
  }
});

targetProxy.hello_world = "test";


setTimeout(() => {
    targetProxy.hello_world = "test2";

}, 5000);


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