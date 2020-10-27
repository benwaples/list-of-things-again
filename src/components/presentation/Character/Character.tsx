import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  id: string,
  name: string,
  imageUrl: string
}

export const Character = ({id, name, imageUrl}: Props) => {
  return (
    <div>
      <figure>
        <img src={imageUrl} alt={name} />
        <figcaption>{name}</figcaption>
      </figure>
      <Link to={`/characters/${id}`}>See More</Link>
    </div>
  )
}
