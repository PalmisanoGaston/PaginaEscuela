import React from 'react'
export default function VirtualTour(){
  return (
    <div>
      <h2>Recorrida Virtual</h2>
      <div className="card">
        <p>Embed de recorrida 360 o video. Reemplaza el iframe por tu tour (Google Street View, Kuula o video privado).</p>
        <div style={{aspectRatio:'16/9'}}>
          <iframe title="recorrida" src="https://www.youtube.com/embed/dQw4w9WgXcQ" style={{width:'100%',height:'100%'}} />
        </div>
      </div>
    </div>
  )
}