type CharacterShape = {
  _id: string, 
  name: string, 
  image: string
}

export type Character = {
  id: string, 
  name: string, 
  imageUrl: string
}

export const getCharacters = (): Promise<Character[]> => {
  return fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters')
    .then(res => res.json())
    .then(json => json.map((character: CharacterShape) => ({
      id: character._id,
      name: character.name,
      imageUrl: character.image
    })))
}

export const getCharacterById = (id: string): Promise<Character> => {
  return fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters/${id}`)
    .then(res => res.json())
    .then((character: CharacterShape) => ({
      id: character._id,
      name: character.name,
      imageUrl: character.image
    }))
}