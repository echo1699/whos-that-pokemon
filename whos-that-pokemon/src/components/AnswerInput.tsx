import React from 'react';

interface AnswerInputProps {
  name: string;
}

function lowerCase(str: string) {
  return str.toLowerCase()
}

const AnswerInput:React.FC<AnswerInputProps> = ({name}) => {
  const [inputValue, setInputValue] = React.useState<string>('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }
  
  const handleSubmit = () => {
    const lowerCaseAnswer = lowerCase(inputValue)

    if (lowerCaseAnswer === name){
      console.log(`Correct! The Pokémon is ${name}`)
    } else {
      console.log(`Incorrect! Try again.`)
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
      <button className="mt-2 p-2 bg-blue-500 text-white rounded-md"
        onClick={handleSubmit}>
        Submit
      </button>
    </div>
  )
}

export default AnswerInput