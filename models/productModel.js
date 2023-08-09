const Sequelize = require("sequelize");
const conn = require("../db/conn");

const Announcement = conn.define("produtos",{
    product:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    description:{
        type: Sequelize.TEXT,
        allowNull:false,
    },
    state:{
        type: Sequelize.STRING,
        allowNull:false,
    },
    brand:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    price:{
        type:Sequelize.FLOAT(8,2),
        allowNull:false,
    },
});

Announcement.sync({force:false}).then(()=>{
    console.log("A tabela Announcement foi criada com sucesso!");
}).catch((error)=>{
    console.log(`A tabela Announcement ou já foi criado ou está com o error ${error}`);
});