import React from 'react'

export default function ContenedorRenderProp({ contenido, render }) {
  return (
    <>
      <h1>Contenedor Render</h1>

      <p>
        {render ? render(contenido) : contenido}
      </p>
    </>
  )
}
