import {Request, Response} from 'express';
import { Usuario } from "../config/mongoose";
import { CallbackError } from "mongoose";

export let crearUsuario = (req:Request, res:Response) => {
  let objUsuario: any = new Usuario(req.body);
  objUsuario.encriptarPassword(req.body.password);
  objUsuario.save((error: CallbackError, nuevoUsuario: Document) => {
    if(error){
      res.status(500).json({
        ok:false,
        content:error,
        message:'Hubo un error al crear el usuario'
      })
    }else{
      res.status(201).json({
        ok:true,
        content: nuevoUsuario,
        message:'El usuario se creo correctamente'
      })
    }
  })
}

export let loginUsuario = (req:Request, res:Response) => {
  let {correo, password} = req.body;
  Usuario.findOne({usu_email:correo},(error:any, usuario:any) => {
    if(usuario){
      let resultado = usuario.verificarPassword(password);
      if(resultado){
        let token = usuario.generarJWT();
        res.json({
          ok:true,
          message:'Usuario logueado',
          content:token
        })
      }else{
        res.status(400).json({
          ok:false,
          message:"La contraseña es incorrecta"
        })
      }
    }else{
      // console.log('El usuario no existe')
      res.status(404).json({
        ok:false,
        message:'El usuario no existe'
      })
    }
  })
}

export let devolverUsuarios = (req:Request, res:Response) => {
  Usuario.find((error, usuarios) => {
    if(error){
      res.status(500).json({
        ok:false,
        content:error,
        message:'Hubo un error al solicitar los usuarios'
      })
    }else{
      res.json({
        ok:true,
        content:usuarios,
        message:null
      })
    }
  })
}

export let actualizarUsuarioPorId = (req:Request, res:Response) => {
  let {id} = req.params;
  //Podemos añadir varias opciones en nuestras operaciones, en este caso el new:true para que devuelve el registro actualzadoya que por defecto devolvera el previo, antes de actualizar
  Usuario.findByIdAndUpdate(id, req.body, {new:true}, (error, usuarioActualizado:any) => {
    if(req.body.password){
      if(usuarioActualizado){
        usuarioActualizado.encriptarPassword(req.body.password);
        //acemos efectivo la actualización de usuario
        usuarioActualizado.save();
      }
    }
    if(error){
      res.status(500).json({
        ok:false,
        content:error,
        message:'Hubo un error al actualizar el usuario'
      })
    }else{
      res.status(201).json({
        ok:true,
        content:usuarioActualizado,
        message:'Se actualizo correctamente el usuario'
      })
    }
  })
}