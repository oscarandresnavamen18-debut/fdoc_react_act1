OSCAR NAVARRO 
#OBJETIVO DE LA ACTIVIDAD
#cd proyecto_next
#npm run dev
SaludoBasico.jsx

Props: nombre (string, requerida), entusiasta (boolean, opcional).
Debe mostrar "Hola, {nombre}" y, si entusiasta es true, un énfasis adicional.
Casos: con y sin entusiasta.
SaludoDesestructurado.jsx

Props: nombre (string), edad (number).
Debe usar desestructuración en la firma del componente.
Muestra nombre y edad claramente.
PerfilConObjeto.jsx

Prop: usuario (objeto con nombre: string; hobbies: string[]).
Debe listar hobbies separados por comas.
Casos: hobbies vacío (muestra "Sin hobbies") y con varios elementos.
BotonConCallback.jsx

Props: onClick (función), texto (string).
Debe invocar onClick cuando se hace clic.
Describe el comportamiento esperado del botón (sin función real).
ContenedorRenderProp.jsx

Props: contenido (elemento React) o render (función que retorna elemento React).
Debe renderizar el contenido pasado.
Indica qué patrón eliges y por qué (breve justificación).
CajaChildren.jsx

Prop especial: children (contenido React).
Debe envolver y mostrar children dentro de un contenedor simple.
Casos: título + párrafo; lista con varios ítems.
SaludoConDefaultProps.jsx

Props: nombre (string, opcional).
Debe tener valor por defecto para nombre (en JS: valor por defecto en parámetro o fallback interno; evita defaultProps).
Caso: cuando no se pasa nombre, muestra "Invitado".