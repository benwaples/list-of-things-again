import React from 'react'
import { useCharacterById } from '../../../hooks'

export const DetailedCharacter = ({id}: {id: string}) => {
  const {loading, error, character} = useCharacterById(id)
  console.log(id)
  if(loading) return <h1>Loading...</h1>
  if(error) return <h1>Failed to get more info on character</h1>

  return (
    <div>
      <h1>{character.name}</h1>
      <figure>
        <img src={character.imageUrl} alt={character.name} />
        <figcaption>{`Character id: ${character.id}`}</figcaption>
      </figure>
    </div>
  )
}
