import React from 'react'
import { useCharacters } from '../../../hooks'
import { Character } from '../Character/Character'

type CharacterProps = {
  id: string, 
  name: string, 
  imageUrl: string
}

export const CharacterList = () => {
  const { characters, loading, error } = useCharacters()

  const charactersElements = characters.map((character: CharacterProps) => <li key={character.id}>
        <Character {...character}/>
      </li>
  )

  if(loading) return <h1>Loading...</h1>
  if(error) return <h1>failed to get characters</h1>
  return (
    <div>
      {charactersElements}
    </div>
  )
}
