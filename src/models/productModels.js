import { v4 as uuidv4 } from "uuid"

class Product{
    constructor(titulo, descricao, valor){
        this.id =  uuidv4()
        this.titulo = titulo
        this.descricao = descricao
        this.valor = valor
    }
}

export default Product