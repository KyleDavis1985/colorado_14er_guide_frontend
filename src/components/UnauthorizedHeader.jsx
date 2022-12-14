import React from 'react'
import { Link } from 'react-router-dom'

const UnauthorizedHeader = () => {
  return (
    <header>
      <div className='header-container'>
        <nav className='nav-header'>
          <section className='left-header'>
            <Link to ="/" className='header-home'>Home</Link>
            <Link to ="/mountains" className='header-mountain'>14ers</Link>
            <Link to ="/tr" className='header-tripReport'>Trip Reports</Link>
            </section>
            <Link to ="/login" className='right-align'>Login</Link>
        </nav>
      </div>
    </header>
  )
}

export default UnauthorizedHeader