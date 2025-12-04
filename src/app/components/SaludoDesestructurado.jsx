import React from 'react'

export default function SaludoDesestructurado({ nombre, edad }) {
  return (
    <div>
      <h1>Perfil de {nombre}</h1>

      <p>
        Hola {nombre}, tu edad es {edad}
      </p>
    </div>
  )
}
