import React from 'react'
import ReactMarkdown from 'react-markdown'
import { DistricAreaProp } from '../../../typings/typings'

type compBlockData = {
    compBlockData : DistricAreaProp
}
const ComponentWebisteBlocksDistrictAndArea = ({compBlockData}: compBlockData) => {
    console.log(compBlockData,"area yo")
  return (
    <div>
        <h3>{compBlockData?.title}</h3>
        <p>{compBlockData?.description}</p>
        <ReactMarkdown children={compBlockData?.nearbyAttractions}/>
    </div>
  )
}

export default ComponentWebisteBlocksDistrictAndArea