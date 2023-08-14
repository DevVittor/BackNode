const express = require("express");
const Router = express.Router();
const Product = require("../models/productModel");

/*Router.get("/products",(req,res)=>{
    Product.findAll({
        attributes: ['id','product'],
        where:{
            id:1,
            product:"Calça"
        }
    })
    .then(listproducts=>{
        const viewData={
            listproducts,
        }
        res.json(viewData);
    }).catch(err=>console.log(`Deu ruim ${err}`))   
});*/

Router.get("/products",(req,res)=>{});
Router.post("/products/save", (req, res) => {
    let nameProduct = req.body.product;
    Product.create({
      product: nameProduct
    }).then(newProduct => {
      res.status(201).json(newProduct);
    }).catch(error => {
      console.error('Erro ao criar produto:', error);
      res.status(500).json({ error: 'Erro ao criar produto' });
    });
});

module.exports = Router;