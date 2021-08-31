const knex = require("../conexao/conexao");

async function criarDocumento(req, res){
    const documents = await knex('documents');
    res.json(documents);
    
}

module.exports = criarDocumento;