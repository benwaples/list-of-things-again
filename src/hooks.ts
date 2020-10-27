import { useState, useEffect } from 'react'
import { getCharacters } from './services/hey-arnold-api'


export const useCharacters = () => {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getCharacters()
      .then(characters => setCharacters(characters))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [])

  return {
    characters,
    loading,
    error
  }
}