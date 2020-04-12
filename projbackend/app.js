require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors =require("cors");
const cookieParser=require("cookie-parser");
const bodyParser=require("body-parser");

mongoose.connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
}
).then(() => {
        console.log("\nDATABASE CONNECTED")
});

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

 
const port = process.env.PORT || 8000;

app.listen(port, () => {
        console.log(`app is running at port:${port}`);
});