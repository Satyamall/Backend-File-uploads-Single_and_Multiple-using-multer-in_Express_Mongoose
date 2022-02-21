

const express = require('express');
const app = express();
const cors= require('cors');

const connect = require("./config/db");
const productController = require("./controllers/product.controller");

app.use(cors());
app.use(express.json());

app.use("/products",productController);

const start = async ()=>{
    await connect();

    app.listen(5000,()=>{
        console.log("Listen on port 5000");
    })
}

module.exports = start;