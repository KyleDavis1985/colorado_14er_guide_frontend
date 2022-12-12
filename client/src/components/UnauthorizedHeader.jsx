import React from 'react'
import { Link } from 'react-router-dom'

const UnauthorizedHeader = () => {
  return (
    <header>
      <nav>
        <Link to ="/">Home</Link>
        <Link to ="/mountains">14ers</Link>
        <Link to ="/tr">Trip Reports</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  )
}

export default UnauthorizedHeader