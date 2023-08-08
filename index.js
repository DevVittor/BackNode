const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const conn = require("./db/conn");
const cors = require("cors");

//Models
const ProductModel = require("./models/productModel");

//Controllers
const indexController = require("./controllers/indexController");
const error404Controller = require("./controllers/error404Controller");

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

app.get("/",indexController);
app.get("*",error404Controller);

const port  = 8080;
app.listen(port,()=>{
    try{
        console.log(`Servidor rodando na porta ${port}`);
    }catch(error){
        console.log(`Não foi possível iniciar o servidor devido ao error ${port}`);
    }
});