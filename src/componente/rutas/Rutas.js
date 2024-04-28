import React from 'react'
import { Routes, Route, BrowserRouter, Navigate, Link } from 'react-router-dom';
import {InicioPanel} from '../InicioPanel'
import {CrearBloques} from '../CrearBloques'
import { CrearOficina } from '../CrearOficina';
import { GestionarArticulos } from '../GestionarArticulos';
import { AsignarArticulo } from '../AsignarArticulo';
import { ListarArticulos } from '../ListarArticulos';

export const Rutas = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<InicioPanel/>}/>
            <Route path='/' element={<InicioPanel/>}/>
            <Route path='/crear' element={<CrearBloques/>}/>
            <Route path='/crear/oficina' element={<CrearOficina/>}/>
            <Route path='/gestionar' element={<GestionarArticulos/>}/>
            <Route path='/asignar/articulos' element={<AsignarArticulo/>}/>
            <Route path='/listar/articulos' element={<ListarArticulos/>}/>
        </Routes>
    </BrowserRouter>
  )
}
