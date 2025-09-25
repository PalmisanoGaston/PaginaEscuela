import React, { useState } from "react";

const etapas = [
    {
        titulo: "🏗️ Fundación y Primeros Años",
        texto: "La escuela inició su funcionamiento el 23 de abril de 1951 con el nombre de Escuela Fábrica de la Nación Automotores. Al año siguiente se le agregó el número 136. Por iniciativa del entonces director Sr.Antonino Di Grillo, a mediados de 1953, la denominación de la escuela fue la siguiente: Escuela Fábrica de la Nación Automotores N° 136 Eva Perón. El CONET ordena reordenar el número de las escuelas según la fecha de creación y la ciudad de su asentamiento, así desde 1966 pasa a llamarse: Escuela de Educación Técnica N° 35 Ingeniero Eduardo Latzina ."  },
    {
        titulo: "🏢 El Edificio",
        texto: "El edificio, que fue construido a partir de 1948, entregado parcialmente en el '51 y recién terminado a mediados del '52, daba muestras de solidez, que aún hoy se comprueban. Contaba en un principio con 10 aulas, 2 laboratorios, un anfiteatro, 2 aulas para clases de dibujo, un salón de biblioteca, ambientes para dirección, secretaría y tesorería, 2 oficinas de preceptores, una sala con sus sanitarios para profesores y 2 habitaciones para consultorios. Un amplio taller, con cabina de comando para el jefe y fosa para inspección de vehículos, depósito de materiales de dos ambientes, 2 vestuarios para alumnos y maestros, sala de duchas con caldera, sanitarios completos y amplio comedor con cocina moderna.Contaba también con un patio cubierto y 2 descubiertos junto con una playa para estacionamiento."
    },
    {
        titulo: "🔧 Modernización y Mejoras",
        texto: "A este edificio se le hicieron significativos cambios durante las décadas venideras, los cuales consistieron en la edificación de nuevas aulas, construcción de los galpones para nuevas especialidades tales como herrería, la mejora de los pisos, incorporación de nuevas maquinarias y mejoras al espacio de taller, nuevos sanitarios y mejoras de ventilación y alumbrado. La escuela cuenta con una importante cantidad de herramientas, que con el tiempo se han ido actualizando."
    },
    {
        titulo: "💻 Era Digital",
        texto: "En 1983, la escuela participa de un nuevo proyecto e incorpora por primera vez en su historia material de computación, constituido por 6 computadoras. Al año siguiente se incorpora como nueva especialidad Computación junto con otras 12 nuevas unidades actualizadas. Desde ese momento hasta la fecha, han sido ingentes los esfuerzos de los cooperadores por tener montados dos laboratorios actualizados."
    },
    {
        titulo: "🏕️ Campamento Suyai",
        texto: "En 1961 comenzaron las excursiones a Bariloche con fines recreativos. Durante los años siguientes, se repitieron los viajes, pero tras un clima que no fue favorable surgió la idea de adquirir un terreno permanente para edificar y tener donde cocinar y comer, guarecidos de la lluvia. Las gestiones ante Parques Nacionales fueron intensas y porfiadas, hasta que afortunadamente, por Res. 01886 otorgada el 16 de septiembre de 1964, se asignó a la escuela el lote N° 80 de la Villa Mascardi, de 109 x 390 m., con fines de utilidad pública y con un plazo de edificar en el término de 3 años. El campamento cuenta hoy día con dormitorios, cocina, cabañas, un amplio comedor, despensa, sanitarios, sala de ducha y una oficina de enfermería.La instalación también cuenta con un suministro de energía eléctrica y calefacción a gas. Así surgió lo que hoy conocemos como Campamento Suyai, que en lengua araucana significa esperanza.Se ha contabilizado que hasta el año 2000 aproximadamente han concurrido al campamento unos 6415 alumnos en 118 grupos de verano y 36 de invierno."
    }
];

export default function History() {
    const [index, setIndex] = useState(0);

    const siguiente = () => {
        setIndex((prev) => (prev + 1) % etapas.length);
    };

    const anterior = () => {
        setIndex((prev) => (prev - 1 + etapas.length) % etapas.length);
    };

    return (
        <div>
            <h2>Historia de la Escuela</h2>
            <div className="card" style={{ textAlign: "center" }}>
                <h3>{etapas[index].titulo}</h3>
                <p style={{ whiteSpace: "pre-line" }}>{etapas[index].texto}</p>

                <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", gap: "10px" }}>
                    <button onClick={anterior}>⬅️ Anterior</button>
                    <button onClick={siguiente}>Siguiente ➡️</button>
                </div>

                <p style={{ marginTop: "10px", fontSize: "0.9rem", color: "gray" }}>
                    {index + 1} / {etapas.length}
                </p>
            </div>
        </div>
    );
}
