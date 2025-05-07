import React from 'react'
import type { PokemonType } from '../types/Pokemon.types'

interface GameProps {
  pkm: PokemonType;
  crrtPkm: number;
  setCrrtPkm: (value: number) => void;
}

const Game:React.FC<GameProps> = ({ pkm, crrtPkm, setCrrtPkm }) => {
  if (pkm.id === crrtPkm) {
    return (
      <>
        <div className='flex flex-col items-center justify-center h-screen bg-red-500 font-bold text-black'>
          <h1>Who's that Pokemon!</h1>
          <div className='flex flex-col items-center justify-center'>
            <img src={pkm.sprites.front} alt={pkm.name} className='w-400% h-400% grayscale brightness-0' />
            
          </div>
        </div>
      </>
    )
  }
}


export default Game