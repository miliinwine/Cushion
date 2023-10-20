import React from 'react'
import { Header } from '../layout/Header/Header';
import { Main } from '../layout/Main/Main'
import { Footer } from '../layout/Footer/Footer'
import "./styles/global.css"

export const App = () => {
  return (
    <div className='conteiner'>
      <header  className='header'> 
      <Header />
      </header>
      <main>
        <Main />
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  )
}

