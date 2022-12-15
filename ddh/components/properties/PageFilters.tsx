import React from 'react'
import styled from 'styled-components'
const FilterMenu = styled.div`
    display: flex;
    flex-direction: 100vw;
    height: 200px;
    color: red;
`
const PageFilters = () => {
  return (
    <FilterMenu>
    <input type="checkbox" name="bedroom-number" id="no-bed">1</input>
    </FilterMenu>
  )
}

export default PageFilters