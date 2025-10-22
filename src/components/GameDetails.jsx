import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import ReviewForm from "./ReviewForm"
import "../App.css"

const GameDetails = ({ games, setGames }) => {
  const { id } = useParams()
  const [game, setGame] = useState("")
  const [reviews, setReviews] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    let selectedGame = games.find((game) => game._id.toString() === id)
    console.log(id)
    setGame(selectedGame)
  }, [])

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/games/${id}`)
      navigate("/games")
    } catch (error) {
      console.error("Error deleting game:", error)
    }
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
          <p className="description">{game.description}</p>
          <p>
            <strong>Category:</strong> {game.category}
          </p>
          <ReviewForm reviews={reviews} setReviews={setReviews} gameId={id} />
          <div className="reviews-section">
            <h3>Reviews:</h3>
            {reviews.length > 0 ? (
              reviews.map((review, i) => (
                <div key={i}>
                  <p>Rating: {review.rating}</p>
                  <p>{review.comment}</p>
                </div>
              ))
            ) : (
              <p>No reviews yet</p>
            )}
          </div>
        </div>
      </div>
      <button onClick={handleDelete} className="btn-delete">Delete</button>
      <Link to="/games">
        <button type="button" className="btn-back">Back</button>
      </Link>
    </>
  ) : (
    <h2>Game not found</h2>
  )
}

export default GameDetails
