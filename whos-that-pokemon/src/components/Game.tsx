import React from 'react'
import type { PokemonType } from '../types/Pokemon.types'
import AnswerInput from './AnswerInput'
import { Capitalize } from './Capitalize'

interface GameProps {
  pkm: PokemonType;
  setCrrtPkm: (value: number) => void;
}

const Game:React.FC<GameProps> = ({ pkm, setCrrtPkm }) => {
  const [isCorrect, setIsCorrect] = React.useState<boolean>(false)
  const [streak, setStreak] = React.useState<number>(0)

  function handleStreak() {
    if (isCorrect) {
      setStreak(prevCount => prevCount + 1)
    } else {
      setStreak(0)
    }
    setCrrtPkm(Math.floor(Math.random() * 151) + 1)
    setIsCorrect(false)
  }

  React.useEffect(() => {
    console.log('Streak updated:', streak);
  }, [streak])

  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen font-bold text-black'>
        <h2 className='text-2xl mb-4'>Streak: {streak}</h2>
        <h1 className='text-4xl'>Who's that Pokemon!</h1>
        <div className='flex flex-col items-center justify-center'>
          <img src={pkm.sprites.front} className={isCorrect ? 'w-md h-auto max-w-lg' : 'w-md h-auto max-w-lg grayscale brightness-0'} />
          <h2 className={isCorrect ? 'text-2xl mb-4 visible' : 'invisible'}>Correct! It's {Capitalize(pkm.name)}!</h2>
          <AnswerInput name={pkm.name} setIsCorrect={setIsCorrect} />
          <button 
            className='bg-white text-red-500 font-bold px-4 py-2 rounded cursor-pointer mt-4'
            onClick={handleStreak}
          >Try Again!</button>
        </div>
      </div>
    </>
  )
}


export default Game