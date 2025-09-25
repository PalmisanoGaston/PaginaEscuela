import React from "react";

export default function Contacts() {
    const directivos = [
        { role: "Regente", name: "Javier Campagna" },
        { role: "Vicerector", name: "Carlos Salvarey" },
        { role: "Secretaria", name: "Silvina Villanueva" },
        { role: "Regente Turno Mañana", name: "Silvia Echanagoria" },
        { role: "Regente Turno Tarde", name: "Marcelo Veiro" },
        { role: "Regente Turno Noche", name: "Silvana Sardelini" },
        { role: "Subregente Turno Tarde", name: "Mauro Rodriguez" },
        { role: "J.G.E Práctica", name: "Nicolas Policaro" },
    ];

    const socials = [
        { name: "Facebook", url: "https://www.facebook.com/EgresadosET35/?locale=es_LA", icon: "/facebook.png" },
        { name: "Instagram", url: "https://www.instagram.com/et.35.ing.eduardo.latzina/?hl=es", icon: "/instagram.png" },
        { name: "Linkedin", url: "https://www.linkedin.com/school/escuela-tecnica-35-ing-latzina/people/", icon: "/linkedin.png" },
    ];

    return (
        <div>
            <h2>Contactos</h2>

            <div className="card">
                <p><strong>Teléfono:</strong> 4567-5838</p>
            </div>

            <div className="card">
                <h3>Directivos de la Escuela</h3>
                <ul>
                    {directivos.map((d, i) => (
                        <li key={i}>
                            <strong>{d.role}:</strong> {d.name}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="card">
                <h3>Redes Sociales</h3>
                <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
                    {socials.map((s, i) => (
                        <li key={i}>
                            <a
                                href={s.url}
                                target="_blank"
                                rel="noreferrer"
                                style={{ display: "flex", alignItems: "center", gap: "8px" }}
                            >
                                <img src={s.icon} alt={s.name} style={{ width: "24px", height: "24px" }} />
                                {s.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
