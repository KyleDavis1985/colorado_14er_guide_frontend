import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ authenticated, user, handleLogOut}) => {
  return (
    <header>
      <div className='header-container'>
        <nav className='nav-header'>
          <section className='left-header'>
            <Link to ="/" className='header-home'>Home</Link>
            <Link to ="/mountains" className='header-mountain'>14ers</Link>
            <Link to ={`/checklist/${user.id}`} className='header-checklist'>Checklist</Link>
            <Link to ="/tr" className='header-tripReport'>Trip Reports</Link>
          </section>
            <Link to ="/" className='right-align' onClick={handleLogOut}>Logout</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header