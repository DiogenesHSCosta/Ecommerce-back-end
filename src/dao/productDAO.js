class ProductDAO{
    constructor(db){
        this.db = db
    }

    selecionarTodosProdutos(){
        const SQL = "SELECT * FROM product"

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
    selecionarProduto(id){
        const SQL = "SELECT * FROM product WHERE id= ?"

        return new Promise((res, rej) =>{
            this.db.all(SQL, id, (erro, linhas) =>{
                if(!erro){
                    res(linhas)
                }
                else{
                    rej(erro)
                }
            })
        })
    }
    criarProduto(produto){
        let SQL = "INSERT INTO product(id, titulo, descricao, valor) VALUES (?,?,?,?)";

        return new Promise((res, rej) => {
            this.db.run( SQL,
                [
                    produto.id, 
                    produto.titulo, 
                    produto.descricao, 
                    produto.valor
                ],

                (erro) => {
                    if (!erro) {
                        res("produto cadastrado com sucesso");
                    } 
                    else {
                        rej(erro);
                    }
                }
            );
        })
    }
    atualizarProduto(produto, id){
        const SQL = "UPDATE product SET titulo = ? , descricao = ?, valor = ? WHERE id = ?"
        
        return new Promise((res, rej) =>{
            this.db.run(SQL, 
                [
                    produto.titulo, 
                    produto.descricao, 
                    produto.valor,
                    id
                ],
                (erro) =>{
                    if(!erro){
                        res("Usuario Alterado com sucesso!")
                    }
                    else(erro)
                }
                )
        })
    }
    deletarProduto(id){
        let SQL = "DELETE FROM product WHERE id = ?"

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
}
export default ProductDAO