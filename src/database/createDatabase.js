//Criação do banco de dados com SQLite

import sqlite3 from "sqlite3";
import path from "path"
import { dirname } from 'path';
import { fileURLToPath } from 'url';
                                    //colocar caminho da pasta atual    //nome do arquivo
const caminhoArq = path.resolve(dirname(fileURLToPath(import.meta.url)), "database.db")

//variavel responsavel pelos comandos do banco
const db = new sqlite3.Database(caminhoArq)

//texto pra ativar as chaves estrangeiras no SQLite
const pragma =`PRAGMA foreign_keys = ON`

//ativar chave estrangeira
function enableForeignKey(){
    db.run(pragma, (erro) =>{
        if(erro) console.log("Erro in process of creation exec 'pragma'")
    })
}


//Criação da tabela User
const USER_SCHEMAS = `
CREATE TABLE user (
    id VARCHAR(50) PRIMARY KEY,
    nome VARCHAR(80) NOT NULL, 
    email VARCHAR(80) NOT NULL,
    senha VARCHAR(100) NOT NULL
)`
//Criação da tabela Product
const PRODUCT_SCHEMAS=`
CREATE TABLE product(
    id VARCHAR(50) PRIMARY KEY,
    titulo VARCHAR(80) NOT NULL,
    descricao VARCHAR(150) null,
    valor FLOAT
)
`
//criação da tabela Cars
const CAR_SCHEMAS =`
CREATE TABLE car(
    id VARCHAR(50) PRIMARY KEY,
    usuario_id VARCHAR(50),
    produto_id VARCHAR(50),
    statusCar VARCHAR(50),
    FOREIGN KEY (usuario_id) REFERENCES user(id),
    FOREIGN KEY (produto_id) REFERENCES product(id)

)`

const createTableUser = () =>{
    db.run(USER_SCHEMAS, (erro) =>{
        if(erro) console.log("Erro na criação da tabela 'USER'")
    })
}

const createTableProduct = () =>{
    db.run(PRODUCT_SCHEMAS, (erro) =>{
        if(erro) console.log("Erro na criação da tabela 'PRODUCT'")
    })
}

const createTableCAR = () =>{
    db.run(CAR_SCHEMAS, (erro) =>{
        if(erro) console.log("Erro na criação da tabela 'car'")
    })
}

db.serialize(()=>{
    enableForeignKey()
    createTableUser()
    createTableProduct()
    createTableCAR()
})