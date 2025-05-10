import { useNavigate } from 'react-router-dom'

interface HomeProps {
  setCurrentPokemon: (value: number) => void;
}

const Home: React.FC<HomeProps> = ({setCurrentPokemon}) => {
  const navigate = useNavigate()

  const handleStartGame = () => {
    let randomValue = Math.floor(Math.random() * 151) + 1
    setCurrentPokemon(randomValue)
    navigate('/game')
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen backdrop-blur-sm p-4">
      <h1 className="text-4xl font-bold mb-4 text-black">Who's That Pokémon?</h1>
      <p className="text-lg mb-8 text-black">Can you guess the Pokémon from the silhouette?</p>
      <button className="bg-black text-white font-bold px-4 py-2 rounded cursor-pointer"
        onClick={handleStartGame}
      >Start Game</button>
    </div>
  )
}

export default Home