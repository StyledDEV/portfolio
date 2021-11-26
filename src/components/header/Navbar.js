import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { DataContext } from '../../context/DataContext'
import { links } from '../../data/'

export default function Navbar() {
  const { siteName } = useContext(DataContext)
  const currentLocation = useLocation().pathname

  return (
    <nav className="navbar">
      <a href="/" className="navbar-title">
        {siteName}
      </a>

      {links && (
        <ul className="navbar-links">
          {links.map((link) => {
            const { id, url, content, featured } = link
            const linkClass = `navbar-links-item${featured ? ' featured' : ''}`

            return url !== currentLocation ? (
              <li key={id} className="navbar-links-item-container">
                <Link className={linkClass} to={url}>
                  {content}
                </Link>
              </li>
            ) : (
              <li key={id} className={`${linkClass} active`}>
                {content}
              </li>
            )
          })}
        </ul>
      )}
    </nav>
  )
}
