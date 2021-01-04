import { Router } from "express";
import { crearUsuario, loginUsuario, devolverUsuarios, actualizarUsuarioPorId} from "../controllers/usuario";

export let usuario_router =  Router();

usuario_router.post('/registro', crearUsuario);
usuario_router.post('/login',loginUsuario);
usuario_router.get('/usuario',devolverUsuarios);
usuario_router.put('/usuario/:id', actualizarUsuarioPorId);