import React from 'react'
import { DetailedCharacter } from '../../presentation/DetailedCharacter/DetailedCharacter'

type Props = {
  match: { params: { id: string}}
}

export const DetailedCharacterPage = ({match: {params: {id}}}: Props) => {
  return (
    <>
      <DetailedCharacter id={id}/>
    </>
  )
}
