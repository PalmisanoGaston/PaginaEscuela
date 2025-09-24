import React from 'react'
import news from '../../data/news.json'

export default function Home(){
  return (
    <div>
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