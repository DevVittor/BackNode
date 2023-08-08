const express  = require("express");
const Router = express.Router();

Router.get("/",(req,res)=>{
    res.json([{
        'titulo':'Você acaba de receber algo vindo do back para o front!'
    }]);
});

module.exports = Router;