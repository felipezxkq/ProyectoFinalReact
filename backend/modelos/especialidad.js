'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Especialidadchema = Schema(
    {
      Descripcion:String
    })

module.exports = mongoose.model('especialidad',Especialidadchema) 