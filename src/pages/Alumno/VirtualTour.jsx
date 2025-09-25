import React from 'react'

export default function VirtualTour() {
    return (
        <div>
            <h2>Recorrida Virtual</h2>
            <div className="card">
                <p>
                    Conocé nuestras instalaciones, talleres, laboratorios y espacios educativos
                    a través de este recorrido virtual por nuestra escuela.
                </p>
                <div style={{ aspectRatio: '16/9' }}>
                    <iframe
                        title="recorrida"
                        src="https://www.youtube.com/embed/S4B7r3kew-4"
                        style={{ width: '100%', height: '100%', border: 0 }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    )
}
