import React from 'react'

export default function ContenedorRenderProp(contenido, render) {
  return (
    <>
{/* 
    // Propósito: Renderizar contenido dinámico mediante el patrón Render Props, 
// aceptando un elemento o una función que retorna un elemento React. */}

      <h1>
        Contenedor render
      </h1>
      
       <p>{render ? render() : "la pampara"}</p> 
        
    </>
  )
}
