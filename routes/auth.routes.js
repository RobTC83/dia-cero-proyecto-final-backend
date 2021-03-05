const router = require ('express').Router()

const { iniciarSesion, registroUsuario } = require 

const { _router } = require('../app.js')
const iniciarSesion = require ('../controllers/auth.controllers.js')
const registroUsuario = require ('../controllers/auth.controllers.js')
const editarPerfil = require ('../controllers/auth.controllers.js')




router.post('/registro', registroUsuario)
router.post('/iniciar-sesion',iniciarSesion)
router.post('/:id/editar',editarPerfil)




module.exports = router