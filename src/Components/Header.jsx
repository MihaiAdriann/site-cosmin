import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <div className='header d-flex justify-content-left align-items-left'>
      <Link className="link" to="/category">Category</Link>
      <Link className="link" to="/products">Products</Link>
    </div>
  )
}

export default Header
