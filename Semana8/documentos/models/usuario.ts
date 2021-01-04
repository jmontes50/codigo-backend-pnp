import { Schema } from "mongoose";
import crypto from 'crypto';
import {sign} from 'jsonwebtoken';

export let usuarioSchema = new Schema(
  {
    usu_nom: String,
    usu_ape: String,
    usu_email: {
      type: String,
      unique: true,
      index: true,
    },
    usu_dir: String,
    usu_ciudad: String,
    usu_fecnac: {
      type: String,
      min: "1970-01-01",
      max: "2003-01-01",
    },
    usu_hash: String,
    usu_salt: String,
  },
  { timestamps: true }
);

usuarioSchema.methods.encriptarPassword = function(password:string){
  this.usu_salt = crypto.randomBytes(16).toString('hex');
  this.usu_hash = crypto.pbkdf2Sync(password, this.usu_salt, 1000, 64, 'sha512').toString('hex');
}

usuarioSchema.methods.verificarPassword = function(password:string){
  let hashAVerificar = crypto.pbkdf2Sync(password, this.usu_salt, 1000, 64, 'sha512').toString('hex');
  if(hashAVerificar === this.usu_hash){
    return true;
  }else{
    return false;
  }
}

usuarioSchema.methods.generarJWT = function(){
  let payload = {
    usuarioId:this._id,
    usuarioNombre:this.usu_nom,
    usuarioApellidos:this.usu_ape
  }
  let token = sign(payload,'emergencias',{expiresIn:60},{algorithm:'RS256'});
  return token;
}