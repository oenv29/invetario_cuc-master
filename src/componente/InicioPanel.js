import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from './help/Card';
import imgOficina from '../imagen/oficina.png';
import imgBloque from '../imagen/bloque.png';

export const InicioPanel = () => {
    let procesos = [
        {
            id: 1,
            imagen: imgBloque,
            titulo: "Crear Bloques",
            descripcion: "Aquí se crea los bloques",
            ruta: '/crear'
        },
        {
            id: 2,
            imagen: imgOficina,
            titulo: "Crear Oficina",
            descripcion: "Aquí se crea las oficinas",
            ruta: "/crear/oficina"
        },
        {
            id: 3,
            imagen: imgOficina,
            titulo: "Gestionar Articulos",
            descripcion: "Aquí gestionas los articulos",
            ruta: "/gestionar"
        },
    ];

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
                ))}
            </Grid>
        </Box>
    );
};

