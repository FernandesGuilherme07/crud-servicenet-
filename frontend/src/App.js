import React, {useState} from 'react'
import { BrowserRouter } from 'react-router-dom'

import Header from './components/header'
import Footer from './components/footer'

import Login from './pages/login'

import Routes from './routes'

import './App.css'

function App(){

    const [user, setUser] = useState(null)

    const actionLoginDataGoogle = (u) => {
      let newUser = {
        id: u.uid,
        name: u.displayName,
        clients: u.clients
   
      }

      setUser(newUser)

    }

    if(user === null) {
      return <Login onReceiveGoogle={actionLoginDataGoogle}/>
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