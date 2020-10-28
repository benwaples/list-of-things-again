import React from 'react'
import {
  screen,
  render,
  waitFor
} from '@testing-library/react'
import { getCharacterById } from '../../../services/hey-arnold-api'
import { act } from 'react-dom/test-utils'
import { MemoryRouter } from 'react-router-dom'
import { DetailedCharacter } from './DetailedCharacter'

jest.mock('../../../services/hey-arnold-api')

describe('DetailedCharacter Component behavior test', () => {
  it('should render a list of characters', () => {
    act(() => {
      getCharacterById.mockResolvedValue({
          id: 'my', 
          name: 'name', 
          imageUrl: 'is'
        })
    })

    render(<MemoryRouter>
      <DetailedCharacter id={'kasjdf;kljasd'}/>
    </MemoryRouter>)

    screen.getByText('Loading...')

    return waitFor(() => {
      expect(screen.getByText('name')).not.toBeEmptyDOMElement()
    })
  })

  it('should look the same as now with a snapshot test', () => {
    act(() => {
      getCharacterById.mockResolvedValue({
          id: 'my', 
          name: 'name', 
          imageUrl: 'is'
        })
    })

    const { asFragment } = render(<MemoryRouter>
      <DetailedCharacter id={';lkasdjf'} />
    </MemoryRouter>)

    return waitFor(() => {
      // eslint-disable-next-line testing-library/no-wait-for-snapshot
      expect(asFragment()).toMatchSnapshot()
    })
  })
})
