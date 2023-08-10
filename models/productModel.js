const Sequelize = require("sequelize");
const conn = require("../db/conn");

const Announcement = conn.define("produtos",{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
    },
    product:{
        type:Sequelize.STRING,
        allowNull:false,
    },
});

Announcement.sync();
module.exports = Announcement;

/*Announcement.sync({force:true}).then(()=>{
    console.log("A tabela Announcement foi criada com sucesso!");
}).catch((error)=>{
    console.log(`A tabela Announcement ou já foi criado ou está com o error ${error}`);
});*/