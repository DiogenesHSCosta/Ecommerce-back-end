import { v4 as uuidv4 } from "uuid"

class Car{
    constructor(statusCar){
        this.id =  uuidv4()
        this.statusCar = statusCar
    }
}

export default Car