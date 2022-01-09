'use strict'

// AQUI Cargamos el modelo para usarlo posteriormente en la siguiente clase
var Especialista = require('../modelos/especialistas.js');


function guardar(req,res){
    console.log("Estoy guardando especialista")
    let especialista = new Especialista()
    especialista.nombre = req.body.nombre 
    especialista.rut=req.body.rut
    especialista.especialidad=req.body.idEspecialidad

    especialista.save((err, store) => {

        if (err) res.status(500).send(`Error base de datos> ${err}`)

        res.status(200).send({ "mensaje": "creado correctamente", 'especialidad': store })

    })

}


function listar(req,res){
     Especialista.find()
      .populate('especialidad').exec((err, especialistaconespecialidad) => {
        res.status(200).send({ especialistaconespecialidad })
      })
  }


module.exports = {
    guardar,
    listar
};
