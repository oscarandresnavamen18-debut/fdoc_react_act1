import React from 'react'

export default function SaludoDesestructurado(props) {
  const nombre = 'juan';
  const edad = 20;
  return (
    <div>

    {/* // Propósito: Desplegar el nombre y la edad del usuario utilizando desestructuración 
// directamente en los parámetros del componente. */}

        <h1>
          PERFIL DE JUAN

          <p>hola {nombre}, tu edad es {edad}</p>
            
        </h1>
    </div>
  )
}
