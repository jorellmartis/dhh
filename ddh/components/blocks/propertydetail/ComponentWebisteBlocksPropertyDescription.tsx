import React from 'react'
import { DetailDescProp } from '../../../typings/typings'

type compBlockData = {
    compBlockData : DetailDescProp
}
const ComponentWebisteBlocksPropertyDescription = ({compBlockData}:compBlockData) => {
    console.log(compBlockData,"comp desc")
  return (
    <div>{compBlockData?.description}</div>
  )
}

export default ComponentWebisteBlocksPropertyDescription