import { DefaultTheme } from "styled-components";
import { createGlobalStyle } from "styled-components";

const customMediaQuery = (maxWidth: number, queryType = "max-width")  =>
`@media (${queryType}: ${maxWidth}px)`;

const customWrapper = (pY?: number, pX?: number) => 
`padding: ${pY}% ${pX}%;`

const wrapperGlob = {
    custom: customWrapper,
    center: customWrapper(50, 50)
}

const media = {
    custom: customMediaQuery,
    desktop: customMediaQuery(922),
    tablet: customMediaQuery(768),
    mobile: customMediaQuery(576),
}
interface media {
    custom: (maxWidth: number) => string,
    desktop: string,
    tablet: string,
    mobile: string,
}
interface wrapperGlob{
    custom: (pY?: number, pX?: number) => string,
    center: string,
}

declare module "styled-components" {
    interface DefaultTheme {
    primaryColor: string;
    secondaryColor: string;
    media: media
    wrapperGlob : wrapperGlob
    }
}

export const myAppTheme: DefaultTheme = {
    primaryColor: "#000000",
    secondaryColor: "#ffffff",
    media,
    wrapperGlob,
}
export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`

