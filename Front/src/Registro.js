import React, { useState, useEffect } from "react";
import { Container, Grid, Button, Typography, TextField } from '@material-ui/core';
import "typeface-roboto";
import { render } from "react-dom";
import Autocomplete from '@material-ui/lab/Autocomplete';



export default function Registro(){

    const options=['Especialidad', 'Especialidad 1']
    const options2=['Especialista', 'Especialista 1']

    return(
        <Container maxWidth="md">
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
                        options={options}
                        style={{ width: 300 }}
                        renderInput={(params) =>
                        <TextField {...params} label="Combo box" variant="outlined" />}
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
            
            
        </Container>
        
    )    
}