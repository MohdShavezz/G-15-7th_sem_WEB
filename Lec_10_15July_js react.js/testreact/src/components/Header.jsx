import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div style={{display:'flex',gap:10}}>
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <Link to={'/contact'}>Contact</Link>
    </div>
  )
}

export default Header
