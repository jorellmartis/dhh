import React, { ReactElement } from 'react'
import Footer from '../Footer'
import Header from '../Header'
const LayoutMain = ({ children }: { children: ReactElement}) => {
  return (
    <>
    <Header/>
    <main>
    {children}
    </main>
    {/* <Footer/> */}
    </>
  )
}

export default LayoutMain