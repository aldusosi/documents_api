const knex = require("../conexao/conexao");

async function listarUsuarios(req, res){
    try {
        const usuarios = await knex.column('id','kbsizen', 'nome', 'criatedat', 'deletedat').select().from('documents')

        if(usuarios.length === 0){
            return res.status(404).json('Nenhum usuário encontrado.')
        }

        res.json(usuarios);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = listarUsuarios;