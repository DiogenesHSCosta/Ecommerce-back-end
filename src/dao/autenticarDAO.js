function isEmpty(obj)
{
    return !!Object.values(obj).length;    
}

class AutenticarDAO{
    constructor(db){
        this.db = db
    }

    verificar(email, senha){

        const SQL = "SELECT * FROM user WHERE email = ? AND senha = ?"

        return new Promise((res, rej) =>{
            this.db.all(SQL,
                [
                    email,
                    senha
                ],
                (erro, linhas) =>{
                    if(!erro){
                        const verificador = isEmpty(linhas)
                        if(verificador == true){
                            res(linhas)
                        }else{
                            res("Email ou senha não encontrada")
                        }
                    }
                    else{
                        rej(erro)
                    }
            })
        })
    }
}

export default AutenticarDAO