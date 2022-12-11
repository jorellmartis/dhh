import React from 'react'
import HomeBanner from '../../homepage/HomeBanner'
import { CompBlockData } from '../../../typings/typings'


const ComponentWebisteBlocksHomeBanner = ({compBlockData}:CompBlockData) => {
  return (
    <>
    <HomeBanner
    homeBannerData = {compBlockData}  
    />
    </>
  )
}

export default ComponentWebisteBlocksHomeBanner