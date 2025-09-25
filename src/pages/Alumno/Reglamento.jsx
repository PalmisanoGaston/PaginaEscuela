
import React from 'react'
export default function Reglamento(){
  return (
    <div>
      <h2>Reglamento Interno</h2>
      <div className="card">
        <p>Reglamento Interno del Colegio. Edicion 2025. .</p>
        <iframe title="reglamento" src="/reglamento.pdf" style={{width:'100%',height:600,border:'none'}} />
      </div>
    </div>
  )
}