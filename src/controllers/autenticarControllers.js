import AutenticarDAO from "../dao/autenticarDAO.js"
import { sha256 } from "js-sha256"
import jwt from "jsonwebtoken"


const SEGREDO = 'chaveDeSegurança@Manual(PorEnquanto!)'

export function verificarJWT(request, response, next){
    const token = request.headers['x-access-token']
    jwt.verify(token, SEGREDO, (erro, decoded) =>{
        if(erro){
            return response.status(401).end()
        }
        request.email = decoded.email
        next()
    })
}

export const autenticarControllers = (app, db)=>{
    const autenticarDAO = new AutenticarDAO(db)

    app.post("/login", async (request, response) => {
        const email = request.body.email
        const senha = sha256(request.body.senha)

        const retorno = await autenticarDAO.verificar(email, senha)
        
        const token = jwt.sign({name: retorno[0].email}, SEGREDO)

        response.status(200).json({
            statusCode: 200,
            message:"Login realizado com sucesso",
            data:{
                token
            }  
        })
    })

    app.post("/logout", async (request, response) =>{

    })
}

