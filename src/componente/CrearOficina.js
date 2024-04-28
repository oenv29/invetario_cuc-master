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

export const CrearOficina = () => {

    const navegar = useNavigate();

    const [formData, setFormData] = React.useState({
        nombre: '',
        id_bloque:''
    });
    
    const [bloque,setBloque] =  React.useState([])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleChangeBloque = (e) => {
        const { value } = e.target;
        setFormData({ ...formData, id_bloque: value });
    };

    const guardarDatos = async(e) => {
        e.preventDefault();
        const result = await guardarOficina(formData);
        
        if(result.status == "success"){
            setFormData(
                {
                    nombre: '',
                    id_bloque:''
                }
            );
        }else{
            console.log(result.message);
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
                        CREAR OFICINA
                    </Typography>
                    <form onSubmit={guardarDatos}>
                        <TextField
                            fullWidth
                            margin="normal"
                            id="nombre"
                            name="nombre"
                            label="Nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                        />
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