import express from 'express';
import bodyParser from 'body-parser';
import {Request, Response} from 'express';
import mongoose from 'mongoose';

export default class Server {
  public app: express.Application;
  public puerto: any;

  constructor(){
    this.app = express();
    this.puerto = process.env.PORT || 5000;
    this.configurarBodyParser();
    this.manejarRutas();
    this.conectarAMongo();
  }

  configurarBodyParser(){
    this.app.use(bodyParser.urlencoded({extended:false}));
    this.app.use(bodyParser.json());
  }

  manejarRutas(){
    this.app.get('/',(req:Request, res:Response) => {
      res.send("Bienvenid@ a mi API!!!!!!!!!!!!!!");
    })
  }

  iniciarServidor(){
    this.app.listen(this.puerto, () => {
      console.log(`Servidor corriendo en el puerto ${this.puerto}`)
    })
  }

  conectarAMongo(){
    mongoose.connect('mongodb://localhost:27017/documentos', {
      useNewUrlParser:true, useFindAndModify:false,useCreateIndex:true
    })
  }
}