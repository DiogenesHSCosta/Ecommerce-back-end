import { sha256 } from "js-sha256"
import { v4 as uuidv4 } from "uuid"

class User{
    constructor(nome, email, senha){
        this.id =  uuidv4()
        this.nome = nome
        this.email = email
        this.senha = sha256(senha)
    }
}

export default User