import styled from "styled-components";

export const FilterMenu = styled.div`
    display: flex;
    width: 100vw;
    height: 4vh;
    gap: 0.8%;
    padding: 0% 14%;
    margin-top: 5%;
`

export const RoomFilters = styled.div`
    display: flex;
    width: max-content;
    justify-content: space-evenly;
    background: #f2f4f6;
    align-items: center;
    ul{
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: space-between;
        align-items: center;
        li{
        list-style: none;
        transition: all 300ms;
        &:hover{
        background: #e6eaed;
        }
        input[type="radio"]{
        appearance: none;
        &:checked + label{
            color: black;
            background: #e6eaed;

        }
        }
        label{
        transition: all 290ms;
            color: red;
            display: inline-block;
            padding: 8px;
            font-weight: 200;
            font-size: 14px;
            
        }
    }

    }
`
export const OptionsMenu = styled.div`
    
`
