const Sequelize = require("sequelize");
const conn = require("../db/conn");

const Announcement = conn.define("produtos",{
    product:{
        type:Sequelize.STRING,
        allowNull:false,
    },
});

Announcement.sync({force:true}).then(()=>{
    console.log("A tabela Announcement foi criada com sucesso!");
}).catch((error)=>{
    console.log(`A tabela Announcement ou já foi criado ou está com o error ${error}`);
});