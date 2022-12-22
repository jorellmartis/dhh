// @ts-nocheck 
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { SwiperBlock } from "../../styles/reusable/SwiperBlock";
import { SwiperProp } from "../../typings/typings";
import {getStrapiMedia} from '../../helpers/strapi'

type SwiperCompProp = {
    swiperData: SwiperProp
}
const SwiperComp = ({swiperData}: SwiperCompProp ) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
    <>
    <SwiperBlock>
        <Swiper
        style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
        modules={[FreeMode, Navigation, Thumbs]}
        >
        {swiperData?.swiper?.map((image, index) => (
            <SwiperSlide key={`swiper-img-${index}`}>
            <img src={getStrapiMedia(image?.swiperImg)} />
            </SwiperSlide>
        ))}
        </Swiper>
        <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        >
        {swiperData?.swiper?.map((image, index) => (
            <SwiperSlide key={`swiper-thumbimg-${index}`}>
            <img src={getStrapiMedia(image?.swiperImg)} />
            </SwiperSlide>
        ))}
        </Swiper>
    </SwiperBlock>
    </>
  )
}

export default SwiperComp
