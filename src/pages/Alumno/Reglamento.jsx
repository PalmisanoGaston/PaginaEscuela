
import React from 'react'
export default function Reglamento(){
  return (
    <div>
      <h2>Reglamento Interno</h2>
      <div className="card">
        <p>Puedes subir el reglamento en PDF en <code>/public/reglamento.pdf</code> y aquí lo mostramos con un iframe o enlazamos para descargar.</p>
        <iframe title="reglamento" src="/reglamento.pdf" style={{width:'100%',height:600,border:'none'}} />
      </div>
    </div>
  )
}