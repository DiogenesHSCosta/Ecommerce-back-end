
import RegistroDAO from "../dao/registroDAO.js";
import Record from "../models/recordModel.js";
import { verificarJWT } from "./autenticarControllers.js";

const RegistroController = (app, db) => {

    const registroDAO = new RegistroDAO(db);
 
    app.get("/Registro", verificarJWT, async (request, response) =>{
        try {
            const retorno = await registroDAO.selecionarTodosRegistros()
            response.send(retorno)
        } catch (erro) {
            console.log(erro)
        }
    })
    app.get("/Registro/:carrinho_id/:produto_id", async (request, response) =>{

        try {
            const carrinho_id = request.params.carrinho_id
            const produto_id = request.params.produto_id
            const retorno = await registroDAO.selecionarRegistro( carrinho_id, produto_id)
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
            const retorno = await registroDAO.criarRegistro(Registro)
            response.send(retorno)
        } catch (erro) {
            console.log(erro)
        }
    })
    app.put("/Registro/:carrinho_id/:produto_id", verificarJWT, async (request, response) =>{
        try {
            const carrinho_id = request.params.carrinho_id
            const produto_id = request.params.produto_id
            const Registro = new Record (
                request.body.carrinho_id,
                request.body.produto_id,
                request.body.qtd,
            )

            const retorno = await registroDAO.atualizarRegistro(Registro, carrinho_id, produto_id)
            response.send(retorno)
        } catch (erro) {
            console.log(erro)
        }
    })
    app.delete("/Registro/:carrinho_id/:produto_id", async (request, response) =>{
        try {
            const carrinho_id = request.params.carrinho_id
            const produto_id = request.params.produto_id
            const retorno = await registroDAO.deletarRegistro(carrinho_id, produto_id)
            response.send(retorno)
        } catch (erro) {
            console.log(erro)
        }
    })
}

export default RegistroController