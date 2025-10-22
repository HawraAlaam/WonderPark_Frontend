import { Link } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"
import "../App.css"

const Home = ({ games, setGames }) => {
  useEffect(() => {
    const getGames = async () => {
      try {
        const response = await axios.get("http://localhost:3000/games")
        setGames(response.data)
      } catch (error) {
        console.error("Error fetching games:", error)
      }
    }
    getGames()
  }, [])

  return (
    <div className="home">
      <h1>Games</h1>
      <div className="game-list">
        {games.map((game) => (
          <div key={game._id} className="game-card">
            <Link to={`/games/${game._id}`}>
              <img src={game.image} alt={game.name} />
              <h3>{game.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
