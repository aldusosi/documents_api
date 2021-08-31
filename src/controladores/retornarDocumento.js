const knex = require("../conexao/conexao");

async function retornarDomcumento(req, res){
    const {documentId:id} = req.params;

    try {
        const documento = await knex.select('content').from('documents').where('id', id);

        if(documento.length === 0){
            return res.status(404).json('Documento não encontrado.')
        }

        res.json(documento);
    } catch (error) {
        res.status(400).json(error.message);
    }

    res.json(id);
}

module.exports =  retornarDomcumento;