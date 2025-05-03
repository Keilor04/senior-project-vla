//use client se usa para ejecutar el código en la computadora del cliente, no en el servidor
"use client";


import Image from "next/image";
import { useState } from 'react';
import Content from "./components/Content";


const opcionesmenu = [
  { id: 1, nombre: "Nosotros" },
  { id: 2, nombre: "Proyectos" },
  { id: 3, nombre: "Servicios" },
  { id: 4, nombre: "Contacto" },
];

const menu = function () {
  const [elementoActivo, setElementoActivo] = useState(1);
  return (
    <nav>
      {opcionesmenu.map((opcion) => (
        <a
          key={opcion.id}
          href={opcion.url}
          className="p-4 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={() => {
            setElementoActivo(opcion.id);
          }}
        >
           {opcion.nombre}
          {/* Se indica que elementoActivo es igual a la opción id seleccionada
      y && sirve para que si se cumple entonces se ejecute el código
      que está a la derecha de && */}

          {elementoActivo === opcion.id &&
            (<span>✓</span>)}
        </a>
      ))}
      <Content elementoActivoHijo={elementoActivo} />
    </nav>
  );
};


export default function Home() {
  return (
    <div className="items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
      <Image src="/Logo empresa.png" width={500} height={20} style={{ margin: '20px', width: '300px' }} />
      <main>
        {menu()}
      </main>
      <footer>
        <div>
          <div className="items-center justify-center m-2 p-9 bg-white rounded-lg shadow-lg dark:bg-gray-600">
            <h3 className="text-center">Derechos de autor</h3>
              <img src="/Logo empresa.png" alt="" style={{ width: '200px' }} />
          </div>
        
        </div>
      </footer>
    </div>
  );
}
