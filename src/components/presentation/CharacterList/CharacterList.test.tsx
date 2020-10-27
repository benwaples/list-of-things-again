import React from 'react'
import {
  screen,
  waitFor,
  render
} from '@testing-library/react'
import { getCharacters } from '../../../services/hey-arnold-api'
import { MemoryRouter } from 'react-router-dom'
import { CharacterList } from './CharacterList'
import { act } from 'react-dom/test-utils'

jest.mock('../../../services/hey-arnold-api')

describe('CharacterList component behavior test', () => {

  it('should render a list of characters', () => {
   act(() => {

     getCharacters.mockResolvedValue([
       {
         id: 'my', 
         name: 'name', 
         imageUrl: 'is'
       }
   ])
  })

    render(
      <MemoryRouter>
        <CharacterList page={1} />
      </MemoryRouter>
    )
  
    screen.getByText('Loading...')
  

    return waitFor(() => {
      expect(screen.getByText('name')).not.toBeEmptyDOMElement()
    })
  })

  it('CharacterList snapshot', () => {
    act(() => {
      getCharacters.mockResolvedValue([
        {
          id: 'my', 
          name: 'name', 
          imageUrl: 'is'
        }
    ])
   })
    
    const { asFragment } = render(
      <MemoryRouter>
        <CharacterList page={1}/>
      </MemoryRouter>
    )

    return waitFor(() => {
      // eslint-disable-next-line testing-library/no-wait-for-snapshot
      expect(asFragment()).toMatchSnapshot()
    })
  })
  
})
