import React,{useEffect }from 'react'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { useNavigate } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import EnhancedTable from './help/TablaAsignacion'
import {obtenerOficinasPorBlo,obtenerBloques,obtenerArticuloValidarAsignacion,obtenerArticuloValidarAsignacionBloque} from './funciones/Funciones'

export const ListarArticulos = () => {

  const [formData, setFormData] = React.useState({
    id_bloque:'',
    id_oficina:''
  });
  const [oficina,setOficina] =  React.useState([])
  const [bloque,setBloque] =  React.useState([])
  const [asignacion,setAsignacion] =  React.useState([])
  const navegar = useNavigate();




  const buscarArticulos = async(e) => {
    e.preventDefault();
    if(formData.id_bloque && formData.id_oficina){
        let asig = await obtenerArticuloValidarAsignacion(formData.id_bloque,formData.id_oficina)
        if(asig.status == 'success'){
          setAsignacion(asig.asig);
        }
    }else if(formData.id_bloque){
        let asig = await obtenerArticuloValidarAsignacionBloque(formData.id_bloque)
        if(asig.status == 'success'){
          setAsignacion(asig.asig);
        }
    }
    
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

  const obtener = async()=>{
    let res = await obtenerBloques();
    if(res.status == "sunset"){
        setBloque(res.bloques);
    }
  }

  const ir = () => {
    navegar('/')
  };


  useEffect(()=>{
    obtener();
  },[])

  return (
    <>
      <Container maxWidth="sm">
                <Box sx={{ marginTop: 4 }}>
                    <Typography variant="h4" gutterBottom>
                        BUSCAR
                    </Typography>
                    <form onSubmit={buscarArticulos}>
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
                        <Grid container spacing={2} columns={16}>
                            <Grid xs={8}>
                                <Button type="submit" variant="outlined">BUSCAR</Button>
                            </Grid>
                            <Grid xs={8}>
                                <Button onClick={ir} variant="outlined">REGRESAR</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Container>
            {asignacion.length != 0 ? <EnhancedTable asignacion = {asignacion}/>:<Typography variant="h4" gutterBottom>
                        NO HAY ARTICULOS......
                    </Typography>}
      
    </>
  )
}
