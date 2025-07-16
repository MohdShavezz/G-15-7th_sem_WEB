import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div style={{display:'flex',gap:10}}>
      <Link to={'/'}>Home</Link>
      <Link to={'user'}>User</Link>
      <Link to={'form'}>Form</Link>
    </div>
  )
}

export default Header
