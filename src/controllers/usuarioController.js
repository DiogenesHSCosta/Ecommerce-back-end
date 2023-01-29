import User from "../models/UserModels.js"
import UserDao from "../dao/usuarioDAO.js"


const usuarioController = (app, db)=>{
    const userDao = new UserDao(db)

    app.get("/Usuario", async (request, response) =>{
        try {
            const retorno = await userDao.selecionarTodosUsuarios()
            response.json(retorno)
        } 
        catch (erro) {
            console.log(erro)
        }
    })

    app.post("/Usuario", async (request, response) =>{
        

        try {
            const usuario = new User(
                request.body.nome,
                request.body.email,
                request.body.senha
            )
            const retorno = await userDao.criarUsuario(usuario)
            response.send(retorno)
        } 
        catch (erro) {
            console.log(erro)
        }
    })

    app.put("/Usuario/:id", async (request, response) =>{
        
        try {
            const id = request.params.id
            const usuario = new User(
                request.body.nome,
                request.body.email,
                request.body.senha,
            )

            const retorno = await userDao.atualizarUsuario(usuario, id)
            response.send(retorno)
        } 
        catch (erro) {
            console.log(erro)
        }
    })

    app.delete("/Usuario/:id", async (request, response) =>{

        try {
            const id = request.params.id
            let retorno = await userDao.deletarUsuario(id)
            response.send(retorno)
          } 
          catch (erro) {
            console.log(erro)
          }
    })
}

export default usuarioController