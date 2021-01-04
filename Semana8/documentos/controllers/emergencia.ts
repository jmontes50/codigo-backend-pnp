import { Request, Response } from "express";
import { Emergencia } from "../config/mongoose";
// Tanto fs como path son modulos nativos de node.js y ya vienen instalados y listos para utilizar por defecto.
//fs -> FileSystem, sirve para el manejo de archivos, insertar, eliminar, rellenar archivos dentro de mi proyecto.
import fs from "fs";
//path -> otra libreria para manejar de manera sencilla las rutas de mis archivos y carpetas
import path from "path";

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

