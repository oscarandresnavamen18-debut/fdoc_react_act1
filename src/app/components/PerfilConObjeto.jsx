import React from 'react'

export default function PerfilConObjeto({ usuario = {} }) {
  const { nombre = "Sin nombre", edad = "Sin edad", hobbies = [] } = usuario;

  return (
    <div>
      <h3><b>Perfil de {nombre}</b></h3>

      <p>Nombre: {nombre}</p>
      <p>Edad: {edad}</p>

      <p>
        Hobbies: {hobbies.length > 0 ? hobbies.join(', ') : "Sin hobbies"}
      </p>
    </div>
  )
}
