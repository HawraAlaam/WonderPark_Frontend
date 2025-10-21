import { useNavigate } from "react-router-dom"

const GameForm = ({ addGame, newGame, handleChange }) => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    addGame(game)
    navigate("/")
  }

  const game = { ...newGame }

  return (
    <div>
      <h1>Add A New Game</h1>
      <form onSubmit={addGame}>
        <input
          type="text"
          value={game.name}
          onChange={handleChange}
          name="name"
          placeholder="Name"
        />
        <input
          type="text"
          value={game.img}
          onChange={handleChange}
          name="img"
          placeholder="Image URL"
        />
        <textarea
          value={game.description}
          onChange={handleChange}
          name="description"
          placeholder="Description"
        />
        <select
          name="rating"
          value={game.rating}
          onChange={handleChange}>
            <option value="">Select Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default GameForm
