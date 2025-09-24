import React from 'react'


const data = {
computacion: {
'1er año': ['Introducción a la Computación','Ofimática'],
'2do año': ['Programación I','Hardware'],
'3er año': ['Programación II','Redes']
},
mecanica: {
'1er año': ['Dibujo Técnico','Taller I'],
'2do año': ['Maquinaria','Taller II'],
'3er año': ['Motores','Electromecánica']
}
}


export default function Subjects(){
return (
<div>
<h2>Materias por sector</h2>
<div className="card">
<h3>Computación</h3>
{Object.entries(data.computacion).map(([year, subjects])=> (
<div key={year} style={{marginBottom:12}}>
<strong>{year}</strong>
<ul>{subjects.map((s,i)=>(<li key={i}>{s}</li>))}</ul>
</div>
))}
</div>


<div className="card">
<h3>Mecánica</h3>
{Object.entries(data.mecanica).map(([year, subjects])=> (
<div key={year} style={{marginBottom:12}}>
<strong>{year}</strong>
<ul>{subjects.map((s,i)=>(<li key={i}>{s}</li>))}</ul>
</div>
))}
</div>
</div>
)
}