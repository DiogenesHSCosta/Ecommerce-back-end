class UserDao{
    constructor(db){
        this.db = db
    }

    selecionarTodosUsuarios(){
        const SQL = "SELECT * FROM user"

        return new Promise((res, rej) =>{
            this.db.all(SQL, (erro, linhas) =>{
                if(!erro){
                    res(linhas)
                }
                else{
                    rej(erro)
                }
            })
        })
    }
    criarUsuario(usuario){

        let SQL = `INSERT INTO user(id, nome, email, senha) VALUES (?,?,?,?);
                   `;

        const SQL2 ='INSERT INTO car(id) VALUES (?);'

        return new Promise((res, rej) => {
            this.db.all( SQL,
                [
                    usuario.id, 
                    usuario.nome, 
                    usuario.email, 
                    usuario.senha
                    // usuario.id
                ],

                (erro) => {
                    if (!erro) {
                        this.db.all(SQL2, usuario.id,(erroC) =>{
                            if (!erroC) {
                                    res(`cliente cadastrado com sucesso`);
                                } 
                                else {
                                    rej(erroC);
                                }
                        })
                    } 
                    else {
                        rej(erro)
                    }
                }
            );
        })
    }
    atualizarUsuario(usuario, id){
        const SQL = "UPDATE user SET nome = ?, email = ?, senha = ? WHERE id = ?"

        return new Promise((res, rej) => {
            this.db.run(SQL,
                [
                    usuario.nome,
                    usuario.email,
                    usuario.senha,
                    id
                ],
                (erro) =>{
                    if(!erro){
                        res("Usuario atualizado com sucesso!")
                    }
                    else{
                        rej(erro)
                    }
                })
        })
    }
    deletarUsuario(id){
        let SQL = "DELETE FROM user WHERE id = ? "

        return new Promise((res, rej) =>{

            this.db.run(SQL, id, (erro)=>{
                if(!erro){
                    res("Usuário deletado")
                }
                else{
                    rej(erro)
                }
            })
            
        })
    }
    
    //aprender a fazer login
    loginUsuario(){}
}

export default UserDao