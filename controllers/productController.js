const express = require("express");
const Router = express.Router();

Router.post("/cadastro",(req,res)=>{
    res.send("Espera");
});

module.exports = Router;