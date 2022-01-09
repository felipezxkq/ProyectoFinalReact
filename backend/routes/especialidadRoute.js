'use strict'
 
// Cargamos el módulo de express para poder crear rutas
var express = require('express');
 
// Cargamos el controlador
var especialidadController = require('../controllers/especialidadController');
 
// Llamamos al router
var api = express.Router();
 
//  Guardar Autos
api.post('/especialidad', especialidadController.guardar);
api.get('/especialidad', especialidadController.listar);
api.get('/especialidad', especialidadController.listar);
api.delete('/eliminar/:id', especialidadController.EliminaId);

// Exportamos la configuración
module.exports = api;
