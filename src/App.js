import React, {useState} from 'react'
import { BrowserRouter } from 'react-router-dom'

import Header from './components/header'
import Footer from './components/footer'

import Login from './pages/login'

import Routes from './routes'

import './App.css'

function App(){

    const [user, setUser] = useState(null)

    if(user === null) {
      return <Login/>
    }

  return (
    <BrowserRouter>

      <Header/>
  
      <Routes/>


      <Footer/>
    </BrowserRouter>
  )
}

export default App