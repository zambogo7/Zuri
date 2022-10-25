import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './components/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Linktree from './components/Linktree/Linktree'




function App() {
  return (
    <div>
    <img src="profile.jpg" alt="test">
  <Home/>
  <Linktree/>
    </div>
  )
}

export default App
