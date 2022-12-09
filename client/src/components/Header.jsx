import React from 'react'
import { Link } from 'react-router-dom'

const Header = ( {}) => {
  return (
    <header>
      <nav>
        <Link to ="/">Home</Link>
        <Link to ="/mountains">14ers</Link>
        <Link to ="/checklist">Checklist</Link>
        <Link to ="/tr">Trip Reports</Link>
        <Link to ="/register">Register</Link>
      </nav>
    </header>
  )
}

export default Header