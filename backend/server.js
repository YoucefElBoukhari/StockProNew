const dotenv = require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

//connect with mongoDB

const PORT = process.env.PORT || 6000;

// Connect to DB and start Server
mongoose
     .connect(process.env.MONGO_URI)
     .then(() => {
        app.listen(PORT, ()=>{
            console.log(`Server running on port ${PORT}`);
        });
     })
     .catch((err) => console.log(err));