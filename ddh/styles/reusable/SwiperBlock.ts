import styled from "styled-components"
export const SwiperBlock = styled.div`
    width: 100vw;
    height: 63vh;
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
        width: 40vw;
        height: 5vw;
        bottom: 4%;
        left: 0;
        img{
            object-fit: cover;
        }
    }
    }
`