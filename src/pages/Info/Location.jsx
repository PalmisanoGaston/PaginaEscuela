import React from 'react'

const render = (status) => <h3>{status}</h3>

function Map({ center, zoom }){
  const ref = React.useRef()
  React.useEffect(()=>{
    if(!ref.current) return
    const map = new window.google.maps.Map(ref.current, {center, zoom})
    new window.google.maps.Marker({position:center,map})
  }, [ref, center, zoom])

  return <div ref={ref} style={{height:400, width:'100%'}} />
}

export default function Location(){
  // REEMPLAZA coords por las reales
  const school = { lat: -34.6037, lng: -58.3816 }
  const busLines = ["Línea 1 - A 200m", "Línea 23 - A 350m"]

  return (
    <div>
      <h2>Localización</h2>
      <div className="card">
        <p><strong>Dirección:</strong> Calle Falsa 123, Ciudad</p>
        <p><strong>Colectivos cercanos:</strong></p>
        <ul>
          {busLines.map((b,i)=>(<li key={i}>{b}</li>))}
        </ul>
      </div>

      <div className="card">
        <h3>Mapa</h3>
        {/* Uso de API: define REACT_APP_GOOGLE_MAPS_API_KEY en .env y sigue la instrucción en README */}

      </div>
    </div>
  )
}