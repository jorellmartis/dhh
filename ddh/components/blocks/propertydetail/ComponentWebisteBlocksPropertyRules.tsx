import React from 'react'
import { PropRulesProp } from '../../../typings/typings'
import PropRules from '../../properties/PropRules'

type compBlockData = {
    compBlockData : PropRulesProp
}
const ComponentWebisteBlocksPropertyRules = ({compBlockData}: compBlockData) => {
  return (
    <PropRules propRulesData={compBlockData}/>
  )
}

export default ComponentWebisteBlocksPropertyRules