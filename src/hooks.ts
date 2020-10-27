import { useState, useEffect } from 'react'
import { getCharacters, getCharacterById, Character } from './services/hey-arnold-api'

type Characters ={
  characters: Character[],
  loading: boolean,
  error: string | null
}

type CharacterByIdHook = {
  loading: boolean,
  error: string | null,
  character: Character
}

export const useCharacters = (page: number): Characters  => {
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getCharacters(page)
      .then(characters => setCharacters(characters))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [page])

  return {
    characters,
    loading,
    error
  }
}

export const useCharacterById = (id: string): CharacterByIdHook => {
  const [character, setCharacter] = useState<Character>({name: '', imageUrl: '', id: ''})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getCharacterById(id)
      .then((character: {name: string, id: string, imageUrl: string}) => setCharacter(character))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [id])

  return{
    character,
    loading, 
    error
  }
}