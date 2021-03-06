"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const Emergencia_1 = require("../routes/Emergencia");
const Usuario_1 = require("../routes/Usuario");
class Server {
    constructor() {
        this.app = express_1.default();
        this.puerto = process.env.PORT || 5000;
        this.configurarBodyParser();
        this.manejarRutas();
        this.conectarAMongo();
    }
    configurarBodyParser() {
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.use(body_parser_1.default.json());
    }
    manejarRutas() {
        this.app.get('/', (req, res) => {
            res.send("Bienvenid@ a mi API!!!!!!!!!!!!!!");
        });
        this.app.use('', Emergencia_1.emergencia_router);
        this.app.use('', Usuario_1.usuario_router);
    }
    iniciarServidor() {
        this.app.listen(this.puerto, () => {
            console.log(`Servidor corriendo en el puerto ${this.puerto}`);
        });
    }
    conectarAMongo() {
        mongoose_1.default.connect('mongodb://localhost:27017/documentos', {
            useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true
        });
    }
}
exports.default = Server;
