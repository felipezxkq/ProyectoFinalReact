'use strict'
 
// Cargamos el módulo de express para poder crear rutas
var express = require('express');
 
// Cargamos el controlador
var especialistaController = require('../controllers/especialistasController');
 
// Llamamos al router
var api = express.Router();
 
//  Guardar Autos
api.post('/especialista', especialistaController.guardar);
api.get('/especialista', especialistaController.listar);
api.get('/especialistafiltrado/:id', especialistaController.filtrado);
// Exportamos la configuración
module.exports = api;

