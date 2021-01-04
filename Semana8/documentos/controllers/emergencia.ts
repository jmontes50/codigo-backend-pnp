import {Request, Response} from 'express';
import {Emergencia} from '../config/mongoose';

export let crearEmergencia = (req: Request, res:Response) => {
  Emergencia.create(req.body, function(error:any, emergenciaCreada:any){
    if(error){
      res.status(500).json({
        ok:false,
        content:error,
        message:'Hubo un error al registrar la emergencia'
      })
    }else{
      res.status(201).json({
        ok:true,
        content:emergenciaCreada,
        message:'Emergencia creada con éxito'
      })
    }
  })
}