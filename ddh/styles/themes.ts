import { DefaultTheme } from "styled-components";
import { createGlobalStyle } from "styled-components";

const customMediaQuery = (maxWidth: number, queryType = "max-width")  =>
`@media (${queryType}: ${maxWidth}px)`;


const media = {
    custom: customMediaQuery,
    desktop: customMediaQuery(922),
    tablet: customMediaQuery(768),
    mobile: customMediaQuery(576),
}
export interface media {
    custom: (maxWidth: number) => string,
    desktop: string,
    tablet: string,
    mobile: string,
}

declare module "styled-components" {
export interface DefaultTheme {
    primaryColor: string;
    secondaryColor: string;
    media: media
    }
}

export const myAppTheme: DefaultTheme = {
    primaryColor: "#000000",
    secondaryColor: "#ffffff",
    media,
}
export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`

