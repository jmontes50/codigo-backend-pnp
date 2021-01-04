import {Router} from 'express';
import {crearEmergencia, subirImagen} from "../controllers/emergencia";
let multiparty = require('connect-multiparty');
let multipartyMiddleware = multiparty({uploadDir:'./multimedia'})

export let emergencia_router = Router();

emergencia_router.post('/emergencia', crearEmergencia);
emergencia_router.post('/subirImg/:id',multipartyMiddleware ,subirImagen);