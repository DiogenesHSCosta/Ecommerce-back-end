import { v4 as uuidv4 } from "uuid"

class Car{
    constructor(usuario_id){
        this.id =  uuidv4()
        this.usuario_id = usuario_id
    }
}

export default Car