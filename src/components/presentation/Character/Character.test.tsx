import React from 'react'
import { render } from '@testing-library/react'
import { Character } from './Character'
import { MemoryRouter } from 'react-router-dom'

describe('Character component', () => {
  
  it('should render a character', () => {
    const character = {
      id: 'string', 
      name: 'string', 
      imageUrl: 'string'
    }
    const { asFragment } = render(
      <MemoryRouter>
        <Character {...character} />
      </MemoryRouter>
    )

    expect(asFragment()).toMatchSnapshot()
  })
  
})
