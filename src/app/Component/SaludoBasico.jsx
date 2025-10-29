import React from 'react'

export default function SaludoBasico({nombre, estuciasta}) {

  return (
    <>
{/* 
    // Propósito: Mostrar un saludo personalizado con el nombre del usuario, 
// y resaltar el saludo si la prop "entusiasta" es verdadera. */}

    <h1> <b>MIS SALUDOS</b></h1>

        <p>
          Hola {nombre}
      </p>
      
    {estuciasta ? "entuciasta" : "no entuciasta"}

    {/* "Valor verdadero.." / "valor falso " */}

        
    </>
  )
}
