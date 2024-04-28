import React, { useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { useNavigate } from 'react-router-dom';
import { guardar,obtenerArticulos} from '../componente/funciones/Funciones'

export const CrearBloques = () => {

    const navegar = useNavigate();

    const [formData, setFormData] = React.useState({
        nombre: ''
    });
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const guardarDatos = async(e) => {
        e.preventDefault();
        const result = await guardar(formData);
        
        if(result.status == "success"){
            setFormData(
                {
                    nombre: '',
                    apellido: '',
                    apodo: '',
                    email: ''
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
        let res = await obtenerArticulos();
        console.log(res);
    }
    useEffect(()=>{
        obtener();
    },[])

    return (
        <>
            <Container maxWidth="sm">
                <Box sx={{ marginTop: 4 }}>
                    <Typography variant="h4" gutterBottom>
                        CREAR BLOQUES
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
