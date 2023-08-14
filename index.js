const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const conn = require("./db/conn");
const cors = require("cors");
const path = require("path");

//Models
require("./models/productModel");

//Controllers
const indexController = require("./controllers/indexController");
const error404Controller = require("./controllers/error404Controller");
const productController = require("./controllers/productController");
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.get("/products",productController);

app.get("/",indexController);
app.get("/products",productController);
app.post("/products/save",productController);
app.get("*",error404Controller);

const port = 3000;
app.listen(port,()=>{
    try{
        console.log(`Servidor rodando na porta ${port}`);
    }catch(error){
        console.log(`Não foi possível iniciar o servidor devido ao error ${port}`);
    }
});