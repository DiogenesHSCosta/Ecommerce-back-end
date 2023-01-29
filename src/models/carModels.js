import { v4 as uuidv4 } from "uuid"

class Car{
    constructor(usuario_id, produto_id, statusCar){
        this.id =  uuidv4()
        this.usuario_id = usuario_id
        this.produto_id = produto_id
        this.statusCar = statusCar
    }
}

export default Car