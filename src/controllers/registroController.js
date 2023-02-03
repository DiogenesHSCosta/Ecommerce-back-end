
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
    app.get("/Registro/:carrinho_id/:produto_id", async (request, response) =>{

        try {
            const carrinho_id = request.params.carrinho_id
            const produto_id = request.params.produto_id
            const retorno = await recordDAO.selecionarRegistro( carrinho_id, produto_id)
            response.send(retorno)
        } catch (erro) {
            console.log(erro)
        }
    })
    app.post("/Registro", async (request, response) =>{
        try {
            const Registro = new Record (
                request.body.carrinho_id,
                request.body.produto_id,
                request.body.qtd,
            )
            const retorno = await recordDAO.criarRegistro(Registro)
            response.send(retorno)
        } catch (erro) {
            console.log(erro)
        }
    })
    app.put("/Registro/:carrinho_id/:produto_id", async (request, response) =>{
        try {
            const carrinho_id = request.params.carrinho_id
            const produto_id = request.params.produto_id
            const Registro = new Record (
                request.body.carrinho_id,
                request.body.produto_id,
                request.body.qtd,
            )

            const retorno = await recordDAO.atualizarRegistro(Registro, carrinho_id, produto_id)
            response.send(retorno)
        } catch (erro) {
            console.log(erro)
        }
    })
    app.delete("/Registro/:carrinho_id/:produto_id", async (request, response) =>{
        try {
            const carrinho_id = request.params.carrinho_id
            const produto_id = request.params.produto_id
            const retorno = await recordDAO.deletarRegistro(carrinho_id, produto_id)
            response.send(retorno)
        } catch (erro) {
            console.log(erro)
        }
    })
}

export default RegistroController