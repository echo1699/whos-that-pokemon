import React, { useState } from 'react';

interface AnswerInputProps {
  name: string;
  setIsCorrect: (value: boolean) => void;
}

function lowerCase(str: string) {
  return str.toLowerCase()
}

const AnswerInput:React.FC<AnswerInputProps> = ({name, setIsCorrect}) => {
  const [inputValue, setInputValue] = useState<string>('')
  

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }
  
  const handleSubmit = () => {
    const lowerCaseAnswer = lowerCase(inputValue)

    if (lowerCaseAnswer === name){
      console.log(`Correct! The Pokémon is ${name}`)
      setIsCorrect(true)
    } else {
      console.log(`Incorrect! Try again.`)
      setIsCorrect(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <input
        type="text"
        placeholder="Enter your answer"
        className="p-2 border border-gray-300 rounded-md"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button className="mt-4 p-2 bg-blue-500 text-white rounded-md cursor-pointer"
        onClick={handleSubmit}>
        Submit
      </button>
    </div>
  )
}

export default AnswerInput