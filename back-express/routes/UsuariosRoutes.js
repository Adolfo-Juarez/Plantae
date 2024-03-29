// Importamos las dependencias
import express from "express";

// Importamos los controladores
import { login, logout, register, verifySession } from "../controllers/UsuariosController.js";

// Usamos los enrutadores de express
const router = express.Router()

// Declaramos las rutas
router.post('/register', register)
router.post('/login', login)
router.get('/login', verifySession)
router.get('/logout',logout)

// Importamos las rutas
export default router