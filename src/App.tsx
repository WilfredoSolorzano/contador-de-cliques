import React from 'react'
import { GlobalCss } from './styles'
import Contador from './components/Contador'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <GlobalCss />
      <Contador />
      <Footer />
    </>
  )
}

export default App
