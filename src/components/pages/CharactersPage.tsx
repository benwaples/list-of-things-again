import React, { useState } from 'react'
import { CharacterList } from '../presentation/CharacterList/CharacterList'

export const CharactersPage = () => {
  const [page, setPage] = useState(1)

  return (
    <>
    <button disabled={page <= 1} onClick={() => setPage(page => page - 1)}>Previous Page</button>
    <button onClick={() => setPage(page => page + 1)}>Next Page</button>
      <CharacterList page={page}/>
    </>
  )
}
