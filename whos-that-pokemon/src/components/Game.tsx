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
  const [guessCount, setGuessCount] = React.useState<number>(0)


  function handleStreak() {
    if (isCorrect) {
      setStreak(prevCount => prevCount + 1)
      console.log('Streak:', streak)
    } else {
      setStreak(0)
    }
    setCrrtPkm(Math.floor(Math.random() * 151) + 1)
    setIsCorrect(false)
  }
  
  function giveUp() {
    setStreak(0)
    setCrrtPkm(Math.floor(Math.random() * 151) + 1)
    setIsCorrect(false)
  }

  React.useEffect(() => {
    console.log('Streak updated:', streak);
  }, [streak])

  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen font-bold text-black'>
        <h2 className='text-2xl'>Streak:</h2>
        <div className='flex flex-row items-center justify-center mt-2 mb-2'>
          {streak === 0 ? (
            <h2 className='text-2xl'>💀</h2>
          ) : streak >= 1 && streak < 5 ? (
            <h2 className='text-2xl'>{streak} 😮</h2>
          ) : streak >= 5 && streak < 25 ? (
            <h2 className='text-2xl'>{streak} 😃</h2>
          ) : streak >= 25 && streak < 50 ? (
            <h2 className='text-2xl'>{streak} 😊</h2>
          ) : streak >= 50 && streak < 151 ? (
            <h2 className='text-2xl'>{streak} 😁</h2>
          ) : streak >= 151 ? (
            <h2 className='text-2xl'>{streak} 🥳</h2>
          ) : (
            <h2 className='text-2xl'>error</h2>
          )}
          </div>
        <h1 className='text-4xl'>Who's that Pokemon!</h1>
        <div className='flex flex-col items-center justify-center'>
          <img src={pkm.sprites.front} className={isCorrect ? 'w-md h-auto max-w-lg' : 'w-md h-auto max-w-lg grayscale brightness-0'} />
          <button 
            className={isCorrect ? 'bg-blue-500 text-white font-bold px-4 py-2 rounded cursor-pointer mb-4' : 'invisible'}
            onClick={handleStreak}>Next level</button>
          <h2 className={isCorrect ? 'text-2xl  mb-4 visible' : 'invisible'}>Correct! It's {Capitalize(pkm.name)}!</h2>
          {guessCount > 0 && (
          <h2 className='text-4xl mb-4'>
            {pkm.name.split('').map(() => '_').join(' ')}
          </h2>
          )}
          <h2 className={guessCount > 1 ? 'text-2xl mb-4 visible' : 'invisible'}>
            {pkm.types.map((type: { type: { name: string } }, index: number) => (
              <span key={index} className={guessCount > 0 ? 'text-lg font-bold text-white bg-black rounded-full px-2 py-1 mr-2' : 'invisible'}>
                {Capitalize(type.type.name)}
              </span>
            ))}
          </h2>
          <AnswerInput name={pkm.name} setIsCorrect={setIsCorrect} isCorrect={isCorrect} setGuessCount={setGuessCount} />
          <button 
            className={isCorrect ? 'invisible' : 'bg-white text-red-500 font-bold px-4 py-2 rounded cursor-pointer mt-4'}
            onClick={giveUp}>Give Up!</button>
        </div>
      </div>
    </>
  )
}


export default Game