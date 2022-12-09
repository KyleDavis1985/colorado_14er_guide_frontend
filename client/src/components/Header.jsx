import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ authenticated, user, handleLogOut}) => {
  return (
    <header>
      <nav>
        <Link to ="/">Home</Link>
        <Link to ="/mountains">14ers</Link>
        <Link to ={`/checklist/${user.id}`}>Checklist</Link>
        <Link to ="/tr">Trip Reports</Link>
        <Link to ="/" onClick={handleLogOut}>Logout</Link>
      </nav>
    </header>
  )
}

export default Header