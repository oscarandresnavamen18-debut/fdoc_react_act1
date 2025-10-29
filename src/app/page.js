// Importamos el componente Image de Next.js para optimizar imágenes automáticamente
import Image from "next/image";

// Importamos los componentes personalizados creados en la carpeta "componentes"
import SaludoBasico from "./componentes/SaludoBasico";
import SaludoDesestructurado from "./componentes/SaludoDesestructurado";
import PerfilConObjeto from "./componentes/PerfilConObjeto";
import BotonConCallback from "./componentes/BotonConCallback";
import ContenedorRenderProp from "./componentes/ContenedorRenderProp";
import CajaChildren from "./componentes/CajaChildren";
import SaludoConDefaultProps from "./componentes/SaludoConDefaultProps";

// Componente principal de la página Home
export default function Home() {
  return (
    // Contenedor principal con estilos de Tailwind CSS
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {/* Main (contenido principal) */}
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        
        {/* Logo de Next.js */}
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />

        {/* Ejemplo de uso de props en un componente */}
        <SaludoBasico estuciasta={true} />
        <SaludoBasico estuciasta={false} />

        {/* Llamada al componente que usa desestructuración de props */}
        <SaludoDesestructurado />

        {/* Componente que recibe un objeto como prop */}
        <PerfilConObjeto />

        {/* Componente con callback: probablemente ejecuta una función al hacer clic */}
        <BotonConCallback />

        {/* Render prop: se pasa una función como prop que retorna contenido */}
        <ContenedorRenderProp render={() => "la pampara"} /> 

        {/* Componente con children: recibe contenido entre sus etiquetas */}
        <CajaChildren>
          <p>Este es el contenido que se pasa como children al componente CajaChildren</p>
        </CajaChildren>

        {/* Componente con valores por defecto para sus props */}
        <SaludoConDefaultProps nombre="Juan" edad={30} />
      
        {/* Sección informativa con enlaces */}
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.js file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>

        {/* Botones de acción: uno para desplegar el proyecto en Vercel y otro para la documentación */}
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          {/* Botón para desplegar en Vercel */}
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>

          {/* Botón para ir a la documentación oficial de Next.js */}
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
