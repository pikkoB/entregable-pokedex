import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { HashRouter, Route, Router, Routes } from 'react-router-dom'
import Pokedex from './components/Pokedex'
import InputName from './components/InputName'
import PokemonDetail from './components/PokemonDetail'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <HashRouter>
    <Routes>
      <Route  path='/' element ={<InputName/> } />
      <Route path="/pokedex/:id" element={<PokemonDetail />} />
      <Route element= {<ProtectedRoutes/>} >
      <Route path='/pokedex' element={<Pokedex/>} />
      {/* <Route path='/pokedex/:id' element={<PokemonDetail/>} /> */}
    
      </Route>
    </Routes>
  </HashRouter>
  )
}

export default App
