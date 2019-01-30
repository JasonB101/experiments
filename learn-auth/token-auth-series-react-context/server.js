const express = require("express");
const expressJwt = require("express-jwt")
const app = express();
require('dotenv').config()
const morgan = require("morgan");
const mongoose = require("mongoose");


app.use(morgan("dev"));
app.use(express.json());

//connect to db
mongoose.connect(process.env.MONGO_URI, () => console.log(`Connected to MongoDB`))

//Require authentication to access ALL routes containing "api"
app.use("/api", expressJwt({secret: process.env.SECRET}))

app.use("/api/todo", require("./routes/todo"));
app.use("/api/user", require("./routes/user"))
app.use("/auth", require("./routes/auth"))

app.use((err, req, res, next) => {
    console.error(err);

    if (err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({ message: err.message });
});

app.listen(process.env.PORT, () => {
    console.log(`[+] Starting server on port ${process.env.PORT}`);
});
