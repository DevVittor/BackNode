const express = require("express");
const Router = express.Router();
const Product = require("../models/productModel");

Router.get("/products",(req,res)=>{
    Product.findAll()
    .then(products=>{
        const viewData={
            admin:false,
            products,
        }
        res.json(viewData);
    }).catch(err=>console.log(`Deu ruim ${err}`))
    
});


module.exports = Router;