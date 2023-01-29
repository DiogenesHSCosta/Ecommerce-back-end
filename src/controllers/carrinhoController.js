
import CarDAO from "../dao/carrinhoDAO.js"
import Car from "../models/carModels.js";


const carrinhoController = (app, db) => {

    const carDAO = new CarDAO(db);
 
    app.get("/Carrinho", async (request, response) =>{
        try {
            const retorno = await carDAO.selecionarTodosCarrinhos()
            response.send(retorno)
        } catch (erro) {
            console.log(erro)
        }
    })
    app.get("/Carrinho/:id", async (request, response) =>{

        try {
            const id = request.params.id
            const retorno = await carDAO.selecionarCarrinho(id)
            response.send(retorno)
        } catch (erro) {
            console.log(erro)
        }
    })
    app.post("/Carrinho", async (request, response) =>{
        try {
            const carrinho = new Car(
                request.body.statusCar,
            )
            const retorno = await carDAO.criarCarrinho(carrinho)
            response.send(retorno)
        } catch (erro) {
            console.log(erro)
        }
    })
    app.put("/Carrinho/:id", async (request, response) =>{
        try {
            const id = request.params.id
            const carrinho = new Car(
                request.body.statusCar,
            )

            const retorno = await carDAO.atualizarCarrinho(carrinho, id)
            response.send(retorno)
        } catch (erro) {
            console.log(erro)
        }
    })
    app.delete("/Carrinho/:id", async (request, response) =>{
        try {
            const id = request.params.id
            const retorno = await carDAO.deletarCarrinho(id)
            response.send(retorno)
        } catch (erro) {
            console.log(erro)
        }
    })
}

export default carrinhoController