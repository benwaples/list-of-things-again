import React from 'react'

type Props = {
  id: string,
  name: string,
  imageUrl: string
}

export const Character = ({id, name, imageUrl}: Props) => {
  return (
    <div>
      <h1>{name}</h1>
      <figure>
        <img src={imageUrl} alt={name} />
        <figcaption>{`Character id: ${id}`}</figcaption>
      </figure>
    </div>
  )
}
