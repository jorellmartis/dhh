import React from 'react'
import { TwoColumnList } from '../../styles/reusable/TwoColumnList'
import { PropRulesProp } from '../../typings/typings'

type propRulesCompProp = {
    propRulesData : PropRulesProp
}

const PropRules = ({propRulesData}: propRulesCompProp) => {
  return (
    <>
    <h3>Property Rules</h3>
    <TwoColumnList>
        <ul>
            {propRulesData?.propRules?.map((rule, index) =>(
                <li key={`property-rule-${index}`}>{rule?.title}</li>
            ))}
        </ul>
    </TwoColumnList>
    
    </>
  )
}

export default PropRules