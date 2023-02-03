class RecordDAO{
    constructor(db){
        this.db = db
    }

    selecionarTodosRegistros(){
        const SQL = "SELECT * FROM purchase_record"

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
    selecionarRegistro( carrinho_id, produto_id){
        const SQL = "SELECT * FROM purchase_record WHERE carrinho_id = ? AND produto_id = ?"

        return new Promise((res, rej) =>{
            this.db.all(SQL, [carrinho_id, produto_id] , (erro, linhas) =>{
                if(!erro){
                    res(linhas)
                }
                else{
                    rej(erro)
                }
            })
        })
    }
    criarRegistro(Registro){
        const SQL ="INSERT INTO purchase_record(carrinho_id, produto_id, qtd) VALUES (?,?,?)"

        return new Promise((res, rej) => {
            this.db.run( SQL,
                [
                    Registro.carrinho_id, 
                    Registro.produto_id, 
                    Registro.qtd
                ],

                (erro) => {
                    if (!erro) {
                        res("registro criado com sucesso");
                    } 
                    else {
                        rej(erro);
                    }
                }
            );
        })
    }
    atualizarRegistro(Registro, carrinho_id, produto_id){
        const SQL = "UPDATE purchase_record SET carrinho_id = ? , produto_id = ?, qtd = ? WHERE carrinho_id = ? AND produto_id = ?"
        
        return new Promise((res, rej) =>{
            this.db.run(SQL, 
                [
                    Registro.carrinho_id, 
                    Registro.produto_id, 
                    Registro.qtd,
                    carrinho_id,
                    produto_id
                ],
                (erro) =>{
                    if(!erro){
                        res("Registro Alterado com sucesso!")
                    }
                    else(erro)
                }
                )
        })
    }
    deletarRegistro(carrinho_id, produto_id){
        let SQL = "DELETE FROM purchase_record WHERE carrinho_id = ? AND produto_id = ?"

        return new Promise((res, rej) =>{

            this.db.run(SQL, [carrinho_id, produto_id], (erro)=>{
                if(!erro){
                    res("Registro deletado")
                }
                else{
                    rej(erro)
                }
            })
        })
    }
}

export default RecordDAO