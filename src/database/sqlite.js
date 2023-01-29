//Estruturação do SQLite
import sqlite3 from "sqlite3";
import path from "path" 
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const caminhoArq = path.resolve(dirname(fileURLToPath(import.meta.url)), "database.db")

const db = new sqlite3.Database(caminhoArq)

process.on("SIGINT", ()=> 
    db.close(()=>{
        console.log('BD ENCERRADO!')
        process.exit(0)
    })
)

export default db