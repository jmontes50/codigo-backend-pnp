import { emergenciaSchema } from "../models/emergencia";
import { usuarioSchema } from "../models/usuario"; 
import { model } from 'mongoose';

export const Emergencia = model('emergencia',emergenciaSchema);
export const Usuario = model('usuario', usuarioSchema);