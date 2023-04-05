import { v4 as uuidv4 } from "uuid"

class Product{
    constructor(titulo, autor, genero, descricao, valor){
        this.id =  uuidv4()
        this.titulo = titulo
        this.autor = autor
        this.genero =  genero
        this.descricao = descricao
        this.valor = valor
    }
}

export default Product