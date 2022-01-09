'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const EspecialistaSchema = Schema(
    {
      nombre:String,
      rut:String,
      especialidad: [{ type: Schema.ObjectId, ref: "especialidad" }]
      

    })

module.exports = mongoose.model('especialistas',EspecialistaSchema)    