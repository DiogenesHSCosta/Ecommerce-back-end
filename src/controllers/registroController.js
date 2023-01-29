
import RecordDAO from "../dao/recordDAO.js"
import Record from "../models/recordModel.js";


const RegistroController = (app, db) => {

    const recordDAO = new RecordDAO(db);
 
    app.get("/Registro", async (request, response) =>{
        try {
            const retorno = await recordDAO.selecionarTodosRegistros()
            response.send(retorno)
        } catch (erro) {
            console.log(erro)
        }
    })
    app.get("/Registro/:usuario_id/:produto_id", async (request, response) =>{

        try {
            const usuario_id = request.params.usuario_id
            const produto_id = request.params.produto_id
            const retorno = await recordDAO.selecionarRegistro( usuario_id, produto_id)
            response.send(retorno)
        } catch (erro) {
            console.log(erro)
        }
    })
    app.post("/Registro", async (request, response) =>{
        try {
            const Registro = new Record (
                request.body.carrinho_id,
                request.body.usuario_id,
                request.body.produto_id,
                request.body.qtd,
            )
            const retorno = await recordDAO.criarRegistro(Registro)
            response.send(retorno)
        } catch (erro) {
            console.log(erro)
        }
    })
    app.put("/Registro/:usuario_id/:produto_id", async (request, response) =>{
        try {
            const usuario_id = request.params.usuario_id
            const produto_id = request.params.produto_id
            const Registro = new Record (
                request.body.carrinho_id,
                request.body.usuario_id,
                request.body.produto_id,
                request.body.qtd,
            )

            const retorno = await recordDAO.atualizarRegistro(Registro, usuario_id, produto_id)
            response.send(retorno)
        } catch (erro) {
            console.log(erro)
        }
    })
    app.delete("/Registro/:usuario_id/:produto_id", async (request, response) =>{
        try {
            const usuario_id = request.params.usuario_id
            const produto_id = request.params.produto_id
            const retorno = await recordDAO.deletarRegistro(usuario_id, produto_id)
            response.send(retorno)
        } catch (erro) {
            console.log(erro)
        }
    })
}

export default RegistroController