import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Card from './help/Card';
import imgOficina from '../imagen/oficina.png'
import imgBloque from '../imagen/bloque.png'

export const GestionarArticulos = () => {
    let procesos = [
        {
            id:1,
            imagen: imgBloque,
            titulo: "Asignar articulos",
            descripcion: " aqui se puede asignar articulos a las oficinas",
            ruta: '/asignar/articulos'
        },
        {
            id:2,
            imagen: imgOficina,
            titulo: "Listar articulos por oficina",
            descripcion: " aqui puedes visualizar articulos por oficina y gestionarlos",
            ruta:"/listar/articulos"
        }
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
