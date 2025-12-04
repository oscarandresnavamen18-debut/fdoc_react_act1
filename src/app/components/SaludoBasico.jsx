import React from 'react'

export default function SaludoBasico({ nombre, entusiasta }) {
  return (
    <>
      <h1><b>MIS SALUDOS</b></h1>

      <p>
        Hola {nombre}
      </p>

      <p>
        {entusiasta ? "Entusiasta" : "No entusiasta"}
      </p>
    </>
  )
}
