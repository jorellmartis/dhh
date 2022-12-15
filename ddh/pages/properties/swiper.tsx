// @ts-nocheck 
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import styled from "styled-components";

const FilterMenu = styled.div`
    display: flex;
    width: 100vw;
`
const BedroomFilter = styled.div`
    display: flex;
    width: max-content;
    height: auto;
    justify-content: space-evenly;
    background: #f2f4f6;
    align-items: center;
    ul{
      display: flex;
      width: 100%;
      height: 10vh;
      justify-content: space-between;
      align-items: center;
      li{
        list-style: none;
      
      input[type="radio"]{
        appearance: none;
        &:checked + label{
          color: black;
        }
      }
      label{
          color: red;
          display: inline-block;
          padding: 5px;
          background: #e6eaed;
        }
    }
  }
`
const SwiperBlock = styled.div`
    width: 100vw;
    height: 40vh;
    position: relative;
    .swiper {
    width: 100%;
    height: 100%;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    &:nth-child(2){
        padding: 0% 5%;
        position: absolute;
        width: 50%;
        height: 20%;
        bottom: 4%;
        left: 0;
        img{
            object-fit: cover;
        }
    }
    }
`
export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
    <SwiperBlock>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={0}
        navigation={true}
        thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </SwiperSlide>
      </Swiper>
    </SwiperBlock>
    <FilterMenu>
      <BedroomFilter>
        <ul>
          <li>
            <input type="radio"  name="room-prop" id="studio" />
            <label onClick={(e) => console.log(e)} htmlFor="studio">Studio</label>
          </li>
          <li>
            <input type="radio"  name="room-prop" id="bed" />
            <label onClick={(e) => console.log(e)} htmlFor="bed">1 bedroom</label>
          </li>
          <li>
            <input type="radio"  name="room-prop" id="bed21" />
            <label onClick={(e) => console.log(e)} htmlFor="bed21">2</label>
          </li>
          <li>
            <input type="radio"  name="room-prop" id="bed3" />
            <label onClick={(e) => console.log(e)} htmlFor="bed3">3</label>
          </li>
          <li>
            <input type="radio"  name="room-prop" id="bed4" />
            <label onClick={(e) => console.log(e)} htmlFor="bed4">4</label>
          </li>
          <li>
            <input type="radio"  name="room-prop" id="bed5" />
            <label onClick={(e) => console.log(e)} htmlFor="bed5">5</label>
          </li>
        </ul>
      </BedroomFilter>
    </FilterMenu>
    </>

  );
}
