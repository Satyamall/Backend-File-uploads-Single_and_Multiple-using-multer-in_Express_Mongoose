
const express = require('express');
const Product = require('../models/product.model');
const router = express.Router();

const upload = require("../utils/file-upload");

router.post("/",upload.single("productImage"), async (req,res)=>{
    const product = await Product.create({
        name: req.body.name,
        price: req.body.price,
        image_url: req.file.path
    })

    res.status(201).json({data: product});
})

router.post("/multiple", upload.array("productImage"), async (req,res)=>{
    const files = req.files.map((file)=> file.path);
    
    const product = await Product.create({
        name: req.body.name,
        price: req.body.price,
        image_url: files
    })

    res.status(201).json({data: product});
})

module.exports= router;