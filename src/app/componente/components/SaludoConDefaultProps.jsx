import React from 'react'

export default function SaludoConDefaultProps({ nombre = "Invitado", edad = 18 }) {
  return (
    <>
    {/* // Propósito: Mostrar un saludo usando una prop opcional "nombre", 
    // que tiene como valor por defecto "Invitado" si no se proporciona. */}

        <h1>Saludo con default props</h1>
        hola {nombre}, tu edad es {edad}
        
    </>
  )
}
