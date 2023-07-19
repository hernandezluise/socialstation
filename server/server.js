const express = require('express');
const cors = require('cors');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const authRoute = require('../server/routes/auth.route');
const jwt = require("jsonwebtoken");

const app = express();
const port = 8000;

// app.use(cors({ origin: "http://localhost:3000", }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./config/mongoose.config');



app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);
app.use(cookieParser());

app.use(express.json());

app.use("/", authRoute );

app.listen(port, () => console.log(`Listening on port: ${port}`));