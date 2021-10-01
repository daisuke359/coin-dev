const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const userRoute = require("./routes/users");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log("connected to mongodb");
});

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("common"));

app.get("/", (req,res) => {
    res.send("Hello");
})

app.use("/api/users", userRoute);

app.listen(8800, () => {
    console.log("listening on port 8800");
});
