require("dotenv").config();
const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");


const app = express();


app.use(cors());

app.use(express.json({limit: '5mb'}));
app.use(express.urlencoded({limit: '5mb'}));

app.use(express.json());

const routes = require("./routes/router");
app.use("/.netlify/functions/api", routes);
if (process.env.NODE_ENV !== "production") {
    app.listen(3000, function () {
        console.log("Servidor Online na porta:", 3000);
    });
}

module.exports = app;