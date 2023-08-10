const express = require("express");
const Router = express.Router();

Router.get("/products",(req,res)=>{
    res.json([{
        'titulo':'Produtos'
    }]);
});


module.exports = Router;