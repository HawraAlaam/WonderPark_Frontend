import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import ReviewForm from "./ReviewForm"

const GameDetails = ({ games, setGames }) => {
  const { id } = useParams()
  const [game, setGame] = useState(null)
  const [reviews, setReviews] = useState([])
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
            <h3>Rating: {game.rating || "No rating yet"}</h3>
          </div>
          <p className="description">{game.description}</p>
          <ReviewForm reviews={reviews} setReviews={setReviews} gameId={id} />
          <div className="reviews-section">
            <h3>Reviews:</h3>
            {reviews.length > 0 ? (
              reviews.map((review, i) => (
                <div key={i}>
                  <p>Rating:{review.rating}</p>
                  <p>{review.comment}</p>
                </div>
              ))
            ) : (
              <p>No reviews yet</p>
            )}
          </div>
        </div>
      </div>
      <button onClick={handleDelete}>Delete</button>
      <Link to="/">Back</Link>
    </>
  ) : (
    <h2>Game not found</h2>
  )
}

export default GameDetails
