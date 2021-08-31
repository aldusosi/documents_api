const knex = require("../conexao/conexao");
const bcrypt = require("bcrypt");
const memorySizeOf = require("../utilities/VerificaTamanho");

async function criarDocumento(req, res){
    const { nome, content } = req.body;
    const kbsizen = memorySizeOf(content);

    if(!nome || !content){
        return res.status(400).json('Todos os campos são obrigatórios.')
    }

    try {
        const data = new Date();
        const newDoc = {
            kbsizen: kbsizen,
            nome: nome,
            content: content,
            criatedat: data
        }

        const documentos = await knex('documents').insert(newDoc);

        if(documentos.length === 0){
            return res.status(400).json('Erro ao cadastrar documento')
        }

        res.json('sucesso ao cadastrar.');
    } catch (error) {
        return res.status(400).json(error.message);
    }
    
}

module.exports = criarDocumento;