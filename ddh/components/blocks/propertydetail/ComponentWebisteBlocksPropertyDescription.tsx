import React from 'react'
import ReactMarkdown from 'react-markdown'
import { DetailDescProp } from '../../../typings/typings'

type compBlockData = {
    compBlockData : DetailDescProp
}
const ComponentWebisteBlocksPropertyDescription = ({compBlockData}:compBlockData) => {
    console.log(compBlockData,"comp desc")
  return (
    <div>
    <ReactMarkdown children={compBlockData?.description}/>
    </div>
  )
}

export default ComponentWebisteBlocksPropertyDescription