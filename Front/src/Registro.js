import React, { useState, useEffect } from "react";
import { Container, Grid, Button, Typography, TextField } from '@material-ui/core';
import "typeface-roboto";
import { render } from "react-dom";
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios';



export default function Registro(){
    const [especialidades, setEspecialidad] = useState([])
    const [selectespecialidades, setSEspecialidad] = useState([])

    const handleInputChangeSelectEspecialidad = (event, value)=>{
        setSEspecialidad(value)
    }

    useEffect(()=>{
        getEspecialidad();
    },[])

    async function getEspecialidad() {
        try {
          const response = await axios.get('http://localhost:5000/api/especialidad/');
          if(response.status == 200)
          {
            console.log("obtiene marcas");
            setEspecialidad(response.data.especialidad);
          }     
        } catch (error) {
        }
    }

    const options=[]
    for (var especialidad of especialidades){
        options.push({label: especialidad.Descripcion, value: especialidad._id})
    }
    const options2=['Especialista', 'Especialista 1']


    return(
        <Container maxWidth="md">
            <Grid item xs={6} md={6}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={8}>
                        <Typography variant="h6">
                            Sistema de Agendamiento
                        </Typography>
                    </Grid>
                    <Grid item xs={12} ms={6} fullWidth>
                        <TextField required id="outlined-required" label="Required" defaultValue="Rut Paciente"/>
                    </Grid>
                    <Grid item xs={12} ms={6} fullWidth>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={options}
                            onChange={handleInputChangeSelectEspecialidad}
                            getOptionLabel={(option) => option.label}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Especialidad" />}
                        />
                    </Grid>
                    <Grid item xs={12} ms={6} fullWidth>
                        <Autocomplete
                            options={options2}
                            style={{ width: 300 }}
                            renderInput={(params) =>
                            <TextField {...params} label="Combo box" variant="outlined" />}
                        />
                    </Grid>
                    <Grid item xs={3} ms={2} fullWidth>
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        >
                            Siguiente
                        </Button>
                    </Grid>
                </Grid>
            </Grid> 
        </Container>
        
    )    
}