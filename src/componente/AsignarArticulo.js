import React, { useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { useNavigate } from 'react-router-dom';
import { guardarOficina,obtenerBloques} from '../componente/funciones/Funciones'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {obtenerOficinasPorBlo,obtenerArtiuloValidar,guardarAsignacion} from './funciones/Funciones'

export const AsignarArticulo = () => {
    let articulos = [
        {
            id: 1,
            fecha_ingreso: "22/06/2022",
            fecha_garantia: "22/06/2022",
            marca: "LENOVO",
            modelo: "Thinkcentre"
        },
        {
             id: 2,
            fecha_ingreso: "23/06/2022",
            fecha_garantia: "26/06/2022",
            marca: "LENOVO",
            modelo: "Thinkcentre"
        }
        ]

    const navegar = useNavigate();

    const [formData, setFormData] = React.useState({
        id_bloque:'',
        id_oficina:'',
        id_articulo:''
    });
    
    const [bloque,setBloque] =  React.useState([])
    const [oficina,setOficina] =  React.useState([])
    const [idAr,setIdAr] =  React.useState({
        id_articulo:''
    })


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleChangeBloque = async (e) => {
        const { value } = e.target;
        setFormData({ ...formData, id_bloque: value });
        const respuOfi = await obtenerOficinasPorBlo(value);
        if(respuOfi.status == "success"){
            setOficina(respuOfi.oficinas);
        }
    };  

    const handleChangeOficina = async (e) => {
        const { value } = e.target;
        setFormData({ ...formData, id_oficina: value });
    };  

    const handleChangeArticulo = async (e) => {
        const { value } = e.target;
        setFormData({ ...formData, id_articulo: value });
        setIdAr(value)
    };  

    const guardarDatos = async(e) => {
        e.preventDefault();
        const validar = await obtenerArtiuloValidar(idAr)
        if(validar.contar == 0){
            const result = await guardarAsignacion(formData);
        
            if(result.status == "success"){
                setFormData(
                    {
                        id_bloque:'',
                        id_oficina:'',
                        id_articulo:''
                    }
                );
            }else{
                console.log(result.message);
            }   
        }else{
            console.log("Articulo ya se encuentra en la base de datos...")
        }
    };

    const ir = () => {
        navegar('/')
    };

    const obtener = async()=>{
        let res = await obtenerBloques();
        if(res.status == "sunset"){
            setBloque(res.bloques);
        }
    }

    useEffect(()=>{
        obtener();
    },[])

    return (
        <>
            <Container maxWidth="sm">
                <Box sx={{ marginTop: 4 }}>
                    <Typography variant="h4" gutterBottom>
                        ASIGNAR ARTICULO A UNA OFICINA
                    </Typography>
                    <form onSubmit={guardarDatos}>
                        {/* <TextField
                            fullWidth
                            margin="normal"
                            id="nombre"
                            name="nombre"
                            label="Nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                        /> */}
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Bloques</InputLabel>
                                      <Select
                                      labelId="demo-simple-select-label"
                                      id="demo-simple-select"
                                      value={formData.id_bloque}
                                      label="Bloques"
                                      onChange={handleChangeBloque}
                                      >
                                    {bloque.map(blo =>(
                                      <MenuItem key={blo.id} value={blo.id}>{blo.nombre}</MenuItem>
                                    ))}
                                  </Select>  
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Oficinas</InputLabel>
                                      <Select
                                      labelId="demo-simple-select-label"
                                      id="demo-simple-select"
                                      value={formData.id_oficina}
                                      label="Oficinas"
                                      onChange={handleChangeOficina}
                                      >
                                    {oficina.map(ofi =>(
                                      <MenuItem key={ofi.id} value={ofi.id}>{ofi.nombre}</MenuItem>
                                    ))}
                                  </Select>  
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Articulos</InputLabel>
                                      <Select
                                      labelId="demo-simple-select-label"
                                      id="demo-simple-select"
                                      value={formData.id_articulo}
                                      label="Articulos"
                                      onChange={handleChangeArticulo}
                                      >
                                    {articulos.map(art =>(
                                      <MenuItem key={art.id} value={art.id}>{art.modelo}</MenuItem>
                                    ))}
                                  </Select>  
                        </FormControl>
                        <Grid container spacing={2} columns={16}>
                            <Grid xs={8}>
                                <Button type="submit" variant="outlined">CREAR</Button>
                            </Grid>
                            <Grid xs={8}>
                                <Button onClick={ir} variant="outlined">REGRESAR</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Container>
        </>
    );
}