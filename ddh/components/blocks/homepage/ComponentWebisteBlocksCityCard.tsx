import React from 'react'
import { CityCardProp } from '../../../typings/typings'
import CityCard from '../../elements/cards/CityCard'

type compBlockData = {
  compBlockData: CityCardProp
}
const ComponentWebisteBlocksCityCard = ({compBlockData}: compBlockData) => {
    console.log(compBlockData,"card card card")
  return (
    <CityCard
    cityCardData={compBlockData}
    />
  )
}

export default ComponentWebisteBlocksCityCard