'use strict'

// AQUI Cargamos el modelo para usarlo posteriormente en la siguiente clase
var Especialidad = require('../modelos/especialidad.js');
const servicio = require('../servicios/index')


function guardar(req,res){

    let especialidad = new Especialidad();

    especialidad.Descripcion = req.body.Descripcion;

    especialidad.save( (err, store) => {

        if (err) res.status(500).send(`Error base de datos> ${err}`)

        res.status(200).send({ "mensaje": "creado correctamente", 'especialidad': store })

    })

}


function listar(req,res){
    console.log("Estoy aqui")
    Especialidad.find({},(err,especialidad)=>{
        if(err) return res.status(500).send({message:'error al realizar la peticion'})
        if(!especialidad) return res.status(404).send({message:'Error la persona no existe'})
        res.status(200).send({especialidad})
    })
}

function EliminaId(req,res){
    let idespecialidad = req.params.id
    Especialidad.findByIdAndDelete(idespecialidad, (err) => {
        if (err) return res.status(500).send({ message: 'error al eliminar> ${err}'  })
        res.status(200).send({ message: 'Especialidad eliminada papu' })
        
    })
}



module.exports = {
    guardar,
    listar,
    EliminaId,
};
