"use client";

import React from "react";

export default function Content({ elementoActivoHijo = 1 }) {
    return (
        <div className="max-w-2xl mx-auto mt-10 p-4 bg-white rounded-lg shadow-md dark:bg-gray-600">
            {elementoActivoHijo === 1 &&
                (<div className="max-w-lg">
                    <h3 className="text-2xl text-center font-extrabold mb-4">Nosotros</h3>
                    <p className="text-md text-center text-gray-900 dark:text-gray-200">
                        En un mercado en desarrollo, nos destacamos por ofrecer soluciones integrales en construcción, combinando innovación, calidad y compromiso en cada proyecto; contamos con un equipo altamente capacitado, nos aseguramos de cumplir con los más altos estándares,
                        garantizando resultados eficientes y satisfactorios para nuestros clientes.
                    </p>
                    <img src="/Img_nosotros.png" alt="first image" />
                    <img src="/Img_nosotros02.png" alt="second image" />
                </div>)
            }

            {elementoActivoHijo === 2 &&
                (<div className="max-w-lg m-4">

                    <h3 className="text-center text-2xl font-extrabold mb-4">Residencial Sunset Village</h3>
                    <p className="text-md text-center text-gray-900 dark:text-gray-200">Proyecto residencial exclusivo de Esfera Construcciones, clasificado con 5 estrellas,
                        diseñado para ofrecer un estilo de vida moderno y cómodo, con amplias áreas verdes y
                        excelentes acabados, en una ubicación privilegiada.</p>
                    <img src="/Img_residencial.png" alt="first image" className="mb-4" />
                    <img src="/Img_residencial02.png" alt="second image" className="mb-4" />
                    <img src="/Img_residencial03.png" alt="third image" className="mb-4" />

                    <hr />

                    <h3 className="text-center text-2xl font-extrabold mb-4">Condominio horizontal vertical Los Maderos</h3>
                    <p className="text-md text-center text-gray-700 dark:text-gray-200">Es un proyecto con un desarrollo sostenible de Esfera Construcciones, que combina la
                        privacidad de un condominio horizontal con la comodidad de un diseño vertical, ofreciendo a
                        sus habitantes espacios modernos y funcionales en un entorno tranquilo y accesible.</p>
                    <img src="/Img_condominio.png" alt="first image" className="mb-4" />
                    <img src="/Img_condominio02.png" alt="second image" className="mb-4" />
                    <img src="/Img_condominio03.png" alt="third image" className="mb-4" />

                </div>)
            }

            {elementoActivoHijo === 3 &&
                (<div className="max-w-lg">
                    <h3 className="text-center text-2xl font-extrabold mb-4">Planeamiento</h3>
                    <p className="text-md text-center text-gray-700 dark:text-gray-200">En Esfera Construcciones es fundamental garantizar el éxito de cada proyecto; por lo cual
                        desde la fase inicial, nos enfocamos en definir objetivos claros, establecer cronogramas
                        realistas y gestionar recursos de manera eficiente, un adecuado planeamiento permite
                        minimizar riesgos, optimizar costos y asegurar la calidad y el cumplimiento de plazos en
                        cada uno de nuestros proyectos.</p>
                    <img src="/Planeamiento.png" alt="first image" className="ml-25 m-4" />
                    <hr />
                    <h3 className="text-center text-2xl font-extrabold mb-4">Arquitectura e Ingeniería</h3>
                    <p className="text-md text-center text-gray-700 dark:text-gray-200">En Esfera Construcciones, combinamos la creatividad de la arquitectura con la precisión de la
                        ingeniería para ofrecer soluciones integrales y de alta calidad para cada uno de nuestros
                        clientes, nuestros profesionales trabajan de manera colaborativa para diseñar y ejecutiva
                        para poder desarrollar proyectos innovadores, funcionales y sostenibles.</p>
                    <img src="/Arq. e Ingeniería.png" alt="second image" className="ml-25 m-4" />
                    <hr />
                    <h3 className="text-center text-2xl font-extrabold mb-4">Construcción</h3>
                    <p className="text-md text-center text-gray-700 dark:text-gray-200">En Esfera Construcciones, nos especializamos en la ejecución de proyectos de construcción con
                        estándares del más alto nivel para cumplir con los objetivos establecidos en cada uno de
                        nuestros proyectos.</p>
                    <img src="/Construcción.png" alt="third image" className="m-1" />
                    <hr />
                    <h3 className="text-center text-2xl font-extrabold mb-4">Inversiones inmobiliarias</h3>
                    <p className="text-md text-center text-gray-700 dark:text-gray-200">En esfera construcciones, estamos comprometidos con sus proyectos, por lo cual nos
                        especializamos en identificar oportunidades rentables, que
                        combinan calidad, ubicación estratégica y sostenibilidad.</p>
                    <img src="/Inversiones-inmobiliarias.png" alt="fourth image" className="m-1" />
                    <hr />
                </div>)
            }

            {elementoActivoHijo === 4 &&
                (<div className="max-w-lg">
                    <h1 className="text-2xl font-extrabold mb-4">Contacto</h1>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 dark:text-gray-200">Nombre completo:</label>
                            <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded-lg" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 dark:text-gray-200">Correo electrónico:</label>
                            <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded-lg" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700 dark:text-gray-200">Mensaje:</label>
                            <textarea id="message" rows="6" className="w-full p-2 border border-gray-300 rounded-lg"></textarea>
                        </div>
                        <button type="submit" className="bg-cyan-500 text-white px-4 py-2 rounded-lg">Enviar</button>
                    </form>
                </div>)
            }
        </div>
    );
}