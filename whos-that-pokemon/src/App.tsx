import { useState, useEffect } from 'react'
import axios from 'axios'
import Home from './components/Home'
import Game from './components/Game'
import Loader from './components/Loader'
import './App.css'
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import type { PokemonType } from './types/Pokemon.types'

function App() {
  const [pokemon, setArray] = useState<PokemonType[]>([])
  const [error, setError] = useState<string | null>(null)

  const [currentPokemon, setCurrentPokemon] = useState<number>(Math.floor(Math.random() * 151) + 1)

  const fetchAPI = async () => {
    try {
      const response = await axios.get(`https://pokemon-app-full-stack-831381062774.us-central1.run.app/pokemon`)
      setArray(response.data)
      //console.log(response.data)
    } catch (err: any) {
      setError(err)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchAPI()
  }, [])

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home setCurrentPokemon={setCurrentPokemon}/>} />
          <Route path='/game' element={
            <div className='flex flex-col items-center justify-center h-screen w-md backdrop-blur-sm p-4 shadow-xl'>
              {pokemon.length > 0 ? 
                <Game pkm={pokemon[currentPokemon]} setCrrtPkm={setCurrentPokemon} />
              :
              (<Loader />)}
            </div>
           } />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
