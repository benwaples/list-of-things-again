import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <nav>
      <Link to="/characters">Home</Link>
      <h1>Hey Arnold List</h1>
    </nav>
  )
}
