import React from 'react'

export default function PerfilConObjeto(props) {
  const nombre = 'samuel';
  const edad = 17;
  return (
    <div>
        <h3>
     {/* // Propósito: Mostrar información de un usuario a partir de un objeto recibido por props,
// listando sus hobbies separados por comas o indicando "Sin hobbies" si no hay. */}

           <b>PERFIL DE SAMUEL</b>

           nombre : {nombre},  edad : {edad}

            <b>PERFIL DE SAMUEL</b>        
        </h3>
    </div>
  )
}
