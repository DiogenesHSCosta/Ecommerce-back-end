import Express from "express";
import Cors from "cors";
import middlewares from "./middlewares/config.js";
import db from "./database/sqlite.js";
import usuarioController from "./controllers/usuarioController.js";
import produtosController from "./controllers/produtosController.js";
import carrinhoController from "./controllers/carrinhoController.js";
import RegistroController from "./controllers/registroController.js";
import {autenticarControllers} from "./controllers/autenticarControllers.js";

const app = Express();

middlewares(app, Express, Cors)
usuarioController(app, db)
carrinhoController(app, db)
produtosController(app, db)
RegistroController(app, db)
autenticarControllers(app, db)
export default app;