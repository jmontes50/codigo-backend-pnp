import { Router } from "express";
import { crearUsuario, loginUsuario } from "../controllers/usuario";

export let usuario_router =  Router();

usuario_router.post('/registro', crearUsuario);
usuario_router.post('/login',loginUsuario);