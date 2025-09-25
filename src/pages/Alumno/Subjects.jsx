import React from "react";

export default function Subjects() {
  const base = {
    "1er año": [
      "Lengua y Literatura",
      "Inglés",
      "Historia",
      "Geografía",
      "Educación Ciudadana",
      "Educación Física",
      "Biología",
      "Educación Artística",
      "Matemática",
      "Tecnología de la Representación",
      "Taller"
    ],
    "2do año": [
      "Lengua y Literatura",
      "Inglés",
      "Historia",
      "Geografía",
      "Educación Ciudadana",
      "Educación Física",
      "Biología",
      "Matemática",
      "Física",
      "Tecnología de la Representación",
      "Taller"
    ]
  };

  const computacion = {
    "3er año": ["Matemática", "Física", "Química", "Lengua y Literatura", "Inglés", "Taller", "Lógica Computacional"],
    "4to año": ["Laboratorio de Algoritmos y Estructura de Datos", "Base de Datos", "Organización de Computadoras", "Redes", "Economía y Gestión de las Organizaciones"],
    "5to año": ["Laboratorio de Programación Orientada a Objetos", "Desarrollo de Sistemas", "Administración y Gestión de Base de Datos", "Administración de Sistemas y Redes", "Proyecto Informático I"],
    "6to año": ["Programación sobre Redes", "Desarrollo de Productos Informáticos", "Proyecto Informático II", "Prácticas Profesionalizantes"]
  };

  const mecanica = {
    "3er año": ["Matemática", "Física", "Química", "Lengua y Literatura", "Inglés", "Taller", "Dibujo Técnico"],
    "4to año": ["Estática y Resistencia de Materiales", "Tecnología de los Materiales", "Mecánica", "Economía y Gestión de las Organizaciones", "Gestión de Procesos Productivos"],
    "5to año": ["Motores de Combustión Interna", "Dinámica de los Motores", "Laboratorio de Ensayo de Motores", "Electricidad del Automotor", "Electrónica del Automotor", "Taller de Automotores I"],
    "6to año": ["Diagnóstico de Sistemas del Automotor", "Mecanismos y Fluídica", "Dinámica del Automotor", "Vehículos Especiales", "Taller de Automotores II y III", "Prácticas Profesionalizantes"]
  };

  return (
      <div className="subjects-page">
      <h2>Materias</h2>

      {/* Sección Base */}
          <div className="card base-section">
        <h3>📘 Formación General (Base)</h3>
        {Object.entries(base).map(([year, subjects]) => (
          <div key={year} style={{ marginBottom: 12 }}>
            <strong>{year}</strong>
            <ul>
              {subjects.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Computación */}
          <div className="card computacion-section">
        <h3>💻 Especialidad: Computación</h3>
        {Object.entries(computacion).map(([year, subjects]) => (
          <div key={year} style={{ marginBottom: 12 }}>
            <strong>{year}</strong>
            <ul>
              {subjects.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Mecánica */}
          <div className="card mecanica-section">
        <h3>🔧 Especialidad: Mecánica</h3>
        {Object.entries(mecanica).map(([year, subjects]) => (
          <div key={year} style={{ marginBottom: 12 }}>
            <strong>{year}</strong>
            <ul>
              {subjects.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Perfil Profesional */}
          <div className="card perfil-section">
        <h3>🎓 Perfil Profesional</h3>
        <h4>Técnico en Computación</h4>
        <ul>
          <li>Proyectar, producir, adaptar, implantar y mantener aplicaciones informáticas.</li>
          <li>Instalar, configurar y mantener sistemas informáticos.</li>
          <li>Documentar técnica y funcionalmente aplicaciones y sistemas.</li>
          <li>Asistir y asesorar a usuarios en adquisición y uso de software y hardware.</li>
          <li>Actuar bajo normativas de seguridad vigentes.</li>
          <li>Trabajar en relación de dependencia o en emprendimientos propios.</li>
        </ul>

        <h4>Técnico en Automotores</h4>
        <ul>
          <li>Efectuar anteproyectos de partes y conjuntos del automotor.</li>
          <li>Proyectar y dirigir instalaciones mecánicas de talleres de reparación/mantenimiento.</li>
          <li>Supervisar y aprobar ensayos de funcionamiento de partes y sistemas del automotor.</li>
          <li>Planificar servicios de mantenimiento de flotas.</li>
          <li>Realizar peritajes e investigaciones de funcionamiento en siniestros.</li>
        </ul>
      </div>
    </div>
  );
}
