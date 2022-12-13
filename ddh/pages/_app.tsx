import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { myAppTheme, GlobalStyle } from '../styles/themes'
import LayoutMain from '../components/layout/layout'
import { createContext } from 'react'
import { PageDataProp } from '../typings/typings'
export const AppContext = createContext({});
export default function App({ Component, pageProps }: AppProps ) 
{
  const globalConfig = {
    headerLinks: pageProps.headerData?.blocks,
  }
  console.log(globalConfig,"Global")
  return (
    <ThemeProvider theme={myAppTheme}>
    <GlobalStyle/>
    <AppContext.Provider value={globalConfig}>
      <LayoutMain>
      <Component {...pageProps} />
      </LayoutMain>
    </AppContext.Provider>
    </ThemeProvider>
  )
}
