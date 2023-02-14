import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

const Botons = () => {
    const navigate= useNavigate()
  return (
    <div>
        <button onClick={()=> navigate('/learning')} >Aprendizaje</button>
        <button onClick={()=> navigate('/proyectos')} >Proyectos</button>
        <button onClick={()=> navigate('/logros')}  >Logros</button>
    </div>
  )
}

export default Botons