import React from 'react'
import { Link } from 'react-router-dom'

export default function SingleWork({ work }) {
  const {
    name,
    img: { single: singleImg },
  } = work
  const formattedName = name.toLowerCase().replaceAll(' ', '-')
  return (
    <Link to={`/work/${formattedName}`}>
      <div className="section-work-list-item">
        <img
          className="section-work-list-item-img"
          src={`../images/work/${singleImg}`}
          alt={`Previsualización de ${name}`}
        />
        <div>
          <h4 className="section-work-list-item-name">{name}</h4>
        </div>
      </div>
    </Link>
  )
}
