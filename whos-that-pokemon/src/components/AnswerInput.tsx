import React, { useState } from 'react';

interface AnswerInputProps {
  name: string;
  setIsCorrect: (value: boolean) => void;
  isCorrect: boolean;
  setGuessCount: React.Dispatch<React.SetStateAction<number>>;
}

function lowerCase(str: string) {
  return str.toLowerCase();
}

const AnswerInput: React.FC<AnswerInputProps> = ({ name, setIsCorrect, isCorrect, setGuessCount }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    const lowerCaseAnswer = lowerCase(inputValue);

    if (lowerCaseAnswer === name) {
      console.log(`Correct! The Pokémon is ${name}`);
      setIsCorrect(true);
      setGuessCount(0); // Reset guess count on correct answer
      setInputValue('');
    } else {
      console.log(`Incorrect! Try again.`);
      setIsCorrect(false);
      setGuessCount((prevCount) => prevCount + 1); 
      setInputValue('');
    }
  };

  return (
    <div className={!isCorrect ? 'flex flex-col items-center justify-center w-full h-full' : 'invisible'}>
      <input
        type="text"
        placeholder="Enter your answer"
        className="p-2 mt-4 border border-gray-300 rounded-md"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        className="mt-4 p-2 bg-blue-500 text-white rounded-md cursor-pointer"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default AnswerInput;