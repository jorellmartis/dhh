import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { myAppTheme, GlobalStyle } from '../styles/themes'

export default function App({ Component, pageProps }: AppProps) 
{
  return (
    <ThemeProvider theme={myAppTheme}>
    <GlobalStyle/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
