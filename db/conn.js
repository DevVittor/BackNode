const Sequelize = require("sequelize");
const conn = new Sequelize(
    "NodeBlog","root","",{
        host:"localhost",
        dialect:'mysql'
    }
)

conn.authenticate().then(()=>{
    console.log("Banco de dados sincronizado!");
}).catch((error)=>{
    console.log(`Não foi possível sincronizar o bando de dados pelo error ${error}`);
});

module.exports = conn;