import {Router} from 'express';
import {crearEmergencia} from "../controllers/emergencia";

export let emergencia_router = Router();

emergencia_router.post('/emergencia', crearEmergencia);