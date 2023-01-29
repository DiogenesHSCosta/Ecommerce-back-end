import { response } from "express"
import ProductDAO from "../dao/productDAO.js"
import Product from "../models/productModels.js"

const produtosController = (app, db) => {
    
    const productDAO  = new ProductDAO (db)

    //selecionar todos os itens 
    app.get("/Produto", async (request, response) =>{
        try {
            const retorno = await productDAO.selecionarTodosProdutos()
            response.json(retorno)
        } 
        catch (erro) {
            console.log(erro)
        }
    })

    //selecionar item pelo id
    app.get("/Produto/:id", async (request, response) =>{
        try {
            const id = request.params.id
            const retorno = await productDAO.selecionarProduto(id)
            response.json(retorno)
        } 
        catch (erro) {
            console.log(erro)
        }
    })

    //criar produto
    app.post("/Produto", async (request, response) =>{
        

        try {
            const Produto = new Product(
                request.body.titulo,
                request.body.descricao,
                request.body.valor
            )
            const retorno = await productDAO.criarProduto(Produto)
            response.send(retorno)
        } 
        catch (erro) {
            console.log(erro)
        }
    })

    //atualizar produto
    app.put("/Produto/:id", async (request, response) =>{
        
        try {
            const id = request.params.id
            const Produto = new Product(
                request.body.titulo,
                request.body.descricao,
                request.body.valor
            )

            const retorno = await productDAO.atualizarProduto(Produto, id)
            response.send(retorno)
        } 
        catch (erro) {
            console.log(erro)
        }
    })

    app.delete("/Produto/:id", async (request, response) =>{

        try {
            const id = request.params.id
            let retorno = await productDAO.deletarProduto(id)
            response.send(retorno)
          } 
          catch (erro) {
            console.log(erro)
          }
    })
}

export default produtosController