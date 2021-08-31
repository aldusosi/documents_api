const knex = require("../conexao/conexao");

async function deletarDocumento(req, res){
    const { documentId:id } = req.params;

    try {
        const data = new Date();
        const usuario = await knex('documents').where('id', id);

        if(usuario.length === 0){
            return res.status(404).json('Documento não encontrado.')
        }
        
        const queryParaCriarDataDeDelete = await knex('documents').update('deletedat', data).where('id', id);

        if(queryParaCriarDataDeDelete.length === 0){
            return res.status(400).json('Não foi possivel deletar.');
        }

        res.json('Deletado com sucesso!');
    } catch (error) {
        return res.status(400).json(error.message);
    }

}

module.exports = deletarDocumento;