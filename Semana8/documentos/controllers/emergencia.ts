import { Request, Response } from "express";
import { Emergencia } from "../config/mongoose";
// Tanto fs como path son modulos nativos de node.js y ya vienen instalados y listos para utilizar por defecto.
//fs -> FileSystem, sirve para el manejo de archivos, insertar, eliminar, rellenar archivos dentro de mi proyecto.
import fs from "fs";
//path -> otra libreria para manejar de manera sencilla las rutas de mis archivos y carpetas
import path from "path";
import { CallbackError } from "mongoose";

export let crearEmergencia = (req: Request, res: Response) => {
  Emergencia.create(req.body, function (error: any, emergenciaCreada: any) {
    if (error) {
      res.status(500).json({
        ok: false,
        content: error,
        message: "Hubo un error al registrar la emergencia",
      });
    } else {
      res.status(201).json({
        ok: true,
        content: emergenciaCreada,
        message: "Emergencia creada con éxito",
      });
    }
  });
};

export let subirImagen = (req: Request, res: Response) => {
  let { id } = req.params;
  // console.log(req.files);
  if (req.files.imagen) {
    let ruta = req.files.imagen.path;
    // console.log({ruta})
    let nombreArchivo = ruta.split("\\")[1];
    // console.log(nombreArchivo);
    Emergencia.findByIdAndUpdate(
      id,
      { eme_img: nombreArchivo },
      { new: true },
      (error, emergenciaActualizada) => {
        if (!error) {
          res.status(201).json({
            ok: true,
            content: emergenciaActualizada,
            message: "emergencia actualizada",
          });
        } else {
          res.status(500).json({
            ok: false,
            content: error,
            message: "Hubo un error al subir el archivo",
          });
        }
      }
    );
  } else {
    res.status(400).json({
      ok: false,
      message: "Falta la imagen",
    });
  }
};

export let devolverImagen = (req: Request, res:Response) => {
  let {nombre} = req.params;
  let ruta = `multimedia/${nombre}`;
  let rutaPorDefault = 'multimedia/image.jpg';
  //verificamos si el archivo existe y devolverá un booleano
  if(fs.existsSync(ruta)){
    //resolve sirve para mostrar/devolver un archivo
    //sendFile, para mandar al front nada mas que un archivo, no puedo mandar json, texto o algo adicional
    return res.sendFile(path.resolve(ruta));
  }else{
    return res.sendFile(path.resolve(rutaPorDefault));
  }
};

export let eliminarEmergenciaConImagen = (req:Request, res:Response) => {
  //Que pasos deberiamos seguir para eliminar un registro con sus imagenes
  /**
   * 1.Buscar el registro en nuestra DB
   * 2.Eliminar el registro
   * 3.buscar la imagen en el servidor
   * 4. Si la encontramos la eliminamos
   */
   let {id} = req.params;
   Emergencia.findByIdAndDelete(id,{},(error, emergenciaEliminada:any) => {
     console.log({emergenciaEliminada});
     if(!error && emergenciaEliminada){
       fs.unlink(`multimedia/${emergenciaEliminada.eme_img}`,(errorEliminacion)=>{
         if(error){
           res.status(500).json({
             ok:false,
             content: errorEliminacion,
             message: 'Se elimino el registro pero no se pudo eliminar el archivo'
           })
         }else{
           res.json({
             ok:true,
             content:emergenciaEliminada,
             message:"Se elimino correctamente el registro y su archivo"
           })
         }
       })
     }else{
       res.status(500).json({
        ok:false,
        content:error,
        message:'Hubo un error interno al borrar'
       })
     }
   })
}

export let agregarBitacoraPorId = (req:Request, res:Response) => {
  let {id} = req.params;
  Emergencia.findById(id, (error:CallbackError, resultado:any) => {
    if(!error){
      resultado.eme_bitacora.push(req.body);
      resultado.save();
      res.status(201).json({
        ok:true,
        content:resultado,
        message:'Se agrego un registro a la Bitácora' 
      })
    }else{
      res.status(500).json({
        ok:false,
        content:error,
        message:'Hubo un error al guardar el registro'
      })
    }
  })
}

export let obtenerEmergencias = (req:Request, res: Response) => {
  Emergencia.find((error, emergencias) => {
    if(error){
      res.status(500).json({
        ok:false,
        content:error,
        message:"Hubo un error al listar las emergencias"
      })
    }else{
      res.json({
        ok:true,
        content:emergencias,
        message:"Emergencias obtenidas"
      })
    }
  })
}