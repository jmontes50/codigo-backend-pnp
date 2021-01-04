import { emergenciaSchema } from "../models/emergencia";

import { model } from 'mongoose';

export const Emergencia = model('emergencia',emergenciaSchema);