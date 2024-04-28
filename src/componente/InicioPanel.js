import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Card from './help/Card';
import imgOficina from '../imagen/oficina.png'
import imgBloque from '../imagen/bloque.png'

export const InicioPanel = () => {
    let procesos = [
        {
            id:1,
            imagen: imgBloque,
            titulo: "Crear Bloques",
            descripcion: " aqui se crea los bloque",
            ruta: '/crear'
        },
        {
            id:2,
            imagen: imgOficina,
            titulo: "Crear Oficina",
            descripcion: " aqui se crea las oficinas",
            ruta:"/crear/oficina"
        },
        {
            id:3,
            imagen: imgOficina,
            titulo: "Gestionar Articulos",
            descripcion: " aqui gestionas los articulos",
            ruta:"/gestionar"
        },

    ]

  return (
    <Box sx={{ flexGrow: 1,padding: '40px'}}>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="center">
      <Grid item xs={2} sm={4} md={4}>
        {procesos.map(pro=>(
            <Card
                img= {pro.imagen}
                titulo = {pro.titulo}
                descripcion = {pro.descripcion}
                ruta={pro.ruta}
            />
        ))
        }
      </Grid>
    </Grid>
  </Box>
  
  );
}
