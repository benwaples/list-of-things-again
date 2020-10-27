export const getCharacters = () => {
  return fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters')
    .then(res => res.json())
    .then(json => json.map((character: {_id: string, name: string, image: string}) => ({
      id: character._id,
      name: character.name,
      imageUrl: character.image
    })))
}