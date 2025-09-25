import React from 'react'
import news from '../../data/news.json'

export default function Home(){
    return (
        <div>
            <h2>Bienvenidos a la Escuela T�cnica N�35</h2>
            <p>
                Nuestro compromiso es formar t�cnicos con una s�lida preparaci�n acad�mica y humana,
                acompa�ando a cada estudiante en su crecimiento profesional.
            </p>

            <div style={{ display: "flex", gap: "20px", margin: "20px 0" }}>
                <img src="/EscuelaTecnica35.jpg" alt="Imagen 1 del colegio" style={{ width: "50%" }} />
                <img src="/escuela2.jpg" alt="Imagen 2 del colegio" style={{ width: "50%" }} />
               </div>


      <h2>Noticias</h2>
      {news.map(n=> (
        <article key={n.id} className="card">
          <h3>{n.title}</h3>
          <small>{n.date}</small>
          <p>{n.summary}</p>
        </article>
      ))}
    </div>
  )
}