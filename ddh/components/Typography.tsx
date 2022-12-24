import styled, { css } from "styled-components";

// const pacifico = Pacifico({
//     weight: ['400', '400'],
//     style: ['normal', 'normal'],
//     })
interface Props {
    level?:  1 | 2 | 3 | 4 | 5 | string
    fontFamily?: 'pacifico' | 'primary' | 'secondary'
}

export const Typography = styled.div<Props>`
${(props) => props.theme.media.mobile}{
    //Enter media queries for mobile here
}
${(props) => props.theme.media.custom(444)}{
    //Enter media queries for custom here
}
${(props) => props.theme.media.custom(540)}{
    //Enter media queries for custom here
}
${({level}) => {
    switch (level) {
        case 1:
            return css`
            color: #ffffff;
            font-size: 1.9vw;
            `;
        case 2:
        return css`
        color: red;
        font-size: 30px;
        `
        case 3:
        return css`
        color: red;
        font-size: 25px;
        `
        case 4:
        return css`
        color: red;
        font-size: 20px;
        `
        case 5:
        return css`
        color: red;
        font-size: 15px;
        `
        case "paramain":
        return css`
        font-weight: 500;
        font-size: 23px;
        color: whitesmoke;
        `
        // case "secondary-paragraph":
        // return css`
        // font-weight: 500;
        // font-size: 33px;
        // line-height: 1;
        // letter-spacing: -0.06345px;
        // `
        default:
            break;
    }
}}
${({ fontFamily }) => {
    switch (fontFamily) {
        case "primary":
        return css`
            font-family: Poppins;
        `;
        case "secondary":
        return css`
            font-family: Roboto;
        `;
        case "pacifico":
        return css`
            font-family: Pacifico;
        `;
        default:
        return css`
            font-family: sans-serif; 
        `;
    }
}};
`