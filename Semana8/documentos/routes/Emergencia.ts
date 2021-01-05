import { Router } from "express";
import {
  crearEmergencia,
  subirImagen,
  devolverImagen,
  eliminarEmergenciaConImagen,
  agregarBitacoraPorId,
  obtenerEmergencias
} from "../controllers/emergencia";
let multiparty = require("connect-multiparty");
let multipartyMiddleware = multiparty({ uploadDir: "./multimedia" });

export let emergencia_router = Router();


emergencia_router.post("/emergencia", crearEmergencia);
emergencia_router.post("/subirImg/:id", multipartyMiddleware, subirImagen);
emergencia_router.get("/devolverImagen/:nombre", devolverImagen);
emergencia_router.delete('/emergencia/:id', eliminarEmergenciaConImagen);
emergencia_router.post('/emergencia/:id', agregarBitacoraPorId);
emergencia_router.get("/emergencias", obtenerEmergencias)
