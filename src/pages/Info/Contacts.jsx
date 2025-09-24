
import React from 'react'
export default function Contacts(){
  const contacts = [
    {role:'Dirección', name:'Prof. Juan Perez', phone:'+54 9 11 1234 5678', email:'direccion@escuela.edu.ar'},
    {role:'Secretaría', name:'Sra. Ana Gomez', phone:'+54 9 11 9876 5432', email:'secretaria@escuela.edu.ar'}
  ]
  const socials = [
    {name:'Facebook', url:'https://facebook.com/escuela'},
    {name:'Instagram', url:'https://instagram.com/escuela'}
  ]

  return (
    <div>
      <h2>Contactos y Redes</h2>
      <div className="card">
        <h3>Contactos</h3>
        <ul>
          {contacts.map((c,i)=>(
            <li key={i}><strong>{c.role}:</strong> {c.name} — {c.phone} — {c.email}</li>
          ))}
        </ul>
      </div>

      <div className="card">
        <h3>Redes Sociales</h3>
        <ul>
          {socials.map((s,i)=>(<li key={i}><a href={s.url} target="_blank" rel="noreferrer">{s.name}</a></li>))}
        </ul>
      </div>
    </div>
  )
}