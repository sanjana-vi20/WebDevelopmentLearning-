import React from 'react'
import Currency from './components/Currency'
import Header from './components/Header'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
    <Toaster/>
    <Header/>
    <Currency/>
    </>
  )
}

export default App