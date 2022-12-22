import React from 'react'
import { SwiperProp } from '../../../typings/typings'
import SwiperComp from '../../elements/SwiperComp'

type compBlockData = {
    compBlockData : SwiperProp
}
const ComponentWebisteBlocksImageGallery = ({compBlockData}: compBlockData) => {
    console.log(compBlockData,"swiper block")
    return (
    <SwiperComp swiperData = {compBlockData}/>
    )
}

export default ComponentWebisteBlocksImageGallery