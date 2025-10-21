import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

const GameDetails = ({ games, setGames }) => {
  const { id } = useParams()
  const [game, setGame] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const selectedGame = games.find((game) => String(game.id) === id)
    setGame(selectedGame)
  }, [id, games])

  const handleDelete = () => {
    const updatedGames = games.filter((game) => String(game.id) !== id)
    setGames(updatedGames)
    navigate("/")
  }

  return game ? (
    <>
      <div className="detail">
        <div className="detail-header">
          <img src={game.img} alt={game.name} />
          <div className="listing-name">
            <h1>{game.name}</h1>
          </div>
        </div>
        <div className="info-wrapper">
          <div className="listing-header">
            <h3>Rating: {game.rating}</h3>
          </div>
          <p>{game.description}</p>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
      <Link to="/">Back</Link>
    </>
  ) : (
    <h2>Game not found</h2>
  )
}

export default GameDetails
