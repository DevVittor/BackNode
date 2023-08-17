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

Router.post("/products/save", async (req, res) => {
    let nameProduct = req.body.product;
    try{
      const criarProdutos = await Product.create({
        product: nameProduct
    })
      res.json(criarProdutos);
    }catch(error){
      console.error(`Ocorreu um erro ao criar o produto: ${error}`);
      res.status(500).json({ error: 'Erro ao criar o produto' });
    }
});

Router.get("/shop", async (req,res)=>{
  try{
    const buscarProduct = await Product.findAll();
    res.send({buscarProduct});
  }catch(error){
    console.error(`Não foi possível buscar nenhum produto devido ao error ${error}`);
    res.status(500).json({error: 'Error ao buscar Produto'});
  }
});

/*Router.get("/products/:id", async (req, res) => {
  var idProduct = req.params.id;
  try {
    const modelProduct = await Product.findOne({
      where: {
        id: idProduct,
      },
    });

    if (modelProduct) {
      res.send(modelProduct.product); // Retornar apenas o campo "product" como string
    } else {
      res.status(404).send("Produto não encontrado"); // Lidar com caso de produto não encontrado
    }
  } catch (error) {
    console.error(`Não foi possível buscar o id ${error}`);
    res.status(500).send("Erro na busca do id");
  }
});*/

Router.get("/products/:id", async (req, res) => {
  var idProduct = req.params.id;
  try {
    const modelProduct = await Product.findByPk(idProduct);

    if (modelProduct) {
      res.send(modelProduct.product); // Retornar apenas o campo "product" como string
    } else {
      res.status(404).send("Produto não encontrado"); // Lidar com caso de produto não encontrado
    }
  } catch (error) {
    console.error(`Não foi possível buscar o id ${error}`);
    res.status(500).send("Erro na busca do id");
  }
});


module.exports = Router;