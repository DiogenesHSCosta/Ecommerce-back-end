class CarDAO{
    constructor(db){
        this.db = db
    }

    selecionarTodosCarrinhos(){
        const SQL = "SELECT * FROM car"

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
    selecionarCarrinho(id){
        const SQL = "SELECT * FROM car WHERE id = ?"

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
    criarCarrinho(car){
        const SQL ="INSERT INTO car(id, usuario_id) VALUES (?, ?)"

        return new Promise((res, rej) => {
            this.db.run( SQL,
                [
                    car.id, 
                    car.usuario_id
                ],

                (erro) => {
                    if (!erro) {
                        res("carrinho criado com sucesso");
                    } 
                    else {
                        rej(erro);
                    }
                }
            );
        })
    }
    atualizarCarrinho(carrinho, id){
        const SQL = "UPDATE car SET statusCar = ? WHERE id = ?"
        
        return new Promise((res, rej) =>{
            this.db.run(SQL, 
                [
                    carrinho,
                    id
                ],
                (erro) =>{
                    if(!erro){
                        res("Carrinho Alterado com sucesso!")
                    }
                    else(erro)
                }
                )
        })
    }
    deletarCarrinho(id){
        let SQL = "DELETE FROM car WHERE id = ?"

        return new Promise((res, rej) =>{

            this.db.run(SQL, id, (erro)=>{
                if(!erro){
                    res("carrinho deletado")
                }
                else{
                    rej(erro)
                }
            })
        })
    }
}

export default CarDAO