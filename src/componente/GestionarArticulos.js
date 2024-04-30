import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Card from './help/Card';
import imgOficina from '../imagen/oficina.png'
import imgBloque from '../imagen/bloque.png'

export const GestionarArticulos = () => {
  let procesos = [
    {
      id: 1,
      imagen: imgBloque,
      titulo: "Asignar articulos",
      descripcion: " aqui se puede asignar articulos a las oficinas",
      ruta: '/asignar/articulos'
    },
    {
      id: 2,
      imagen: imgOficina,
      titulo: "Listar articulos por Bloque Y Oficina",
      descripcion: " aqui puedes visualizar articulos por oficina y gestionarlos",
      ruta: "/listar/articulos"
    },
    {
      id: 3,
      imagen: imgOficina,
      titulo: "Buscar articulo por Oficina",
      descripcion: " aqui puedes visualizar articulos por oficina",
      ruta: "/listar/articulosofi"
    }
  ]

  return (
    <Box sx={{ flexGrow: 1, padding: '40px' }}>
      <Grid container spacing={4} justifyContent="center">
        {procesos.map(pro => (
          <Grid key={pro.id} item xs={12} sm={6} md={4} lg={3}>
            <Card
              img={pro.imagen}
              titulo={pro.titulo}
              descripcion={pro.descripcion}
              ruta={pro.ruta}
            />
          </Grid>
        ))
        }
      </Grid>
    </Box>

  );
}
